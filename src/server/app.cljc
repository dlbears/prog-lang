#?(:browser
   (ns server.app
     (:require [instaparse.core :as insta]
               [reagent.core :as r]
               [reagent.dom :as rdom]
               [cljs.core.match :refer-macros [match]]
               [cljs.core :refer [re-matches]]
               [cljs.pprint :refer [pprint]]))

   :cljs
   (ns server.app
     (:require [instaparse.core :as insta]
               ["fs" :refer [readFileSync]]
               [cljs.core.match :refer-macros [match]]
               [cljs.core :refer [re-matches]]
               [cljs.pprint :refer [pprint]]))
   :clj
   (ns server.app (:require [instaparse.core :as insta]
                            [clojure.pprint :refer [pprint]]
                            [clojure.core.match :refer [match]]
                            [clojure.core :refer [re-matches slurp]]
                            [clojure.tools.cli :refer [parse-opts]])
       (:gen-class)))



#?(:clj (defn readFileSync [p] (slurp p)))
#?(:clj (defn str->int [s] (if (integer? s) s (Integer/parseInt s)))
   :cljs (defn str->int [s] (int s)))

(defn optional [pattern] (str pattern \?))
(def alphabet-pattern "[A-z0-9_]+")
(def operator-pattern "('*'|'+'|'-')")
(def operator-re "[\\*\\+\\-]")
(def unary-negation-pattern "('*'|'+'|'-'|'(')'-'+")
(def letter-pattern "[A-z_]")
(def natural-pattern "[1-9]")
(def literal-pattern "-?([1-9]+[0-9]*)|0")

(defn matches-pattern? [pattern] #(let
                                   [matches (if (= 0 (count %)) nil (re-matches (re-pattern pattern) %))
                                    something? (not (nil? matches))]
                                    something?))
(def matches-literal? (matches-pattern? literal-pattern))
(def matches-operator? (matches-pattern? operator-re))

(defn re->gram [pattern] (str "#'" pattern "'"))

(def w* " <#'\\s*'> ")
(defn wrap-w* [t] (str w* t w*))
;; Grammar Spec, where <> denotes suppression from resulting AST
(def lang-grammar (str "
                      <Program> = Assignment*
                      Assignment = Identifier" (wrap-w* "<'='>") "Exp <';'>" w* "
                      <Exp> = Exp " (wrap-w* "'+'") " Term | Exp " (wrap-w* "'-'") " Term | Term
                      <Term> = Term " (wrap-w* "'*'") " Fact | Fact
                      <Fact> = " (wrap-w* "'('") " Exp " (wrap-w* "')'") " | '-' Fact | <'+'> Fact | Literal | Identifier 
                      Identifier = Letter (Letter | Digit)*
                      Literal = '0' | (NonZeroDigit Digit*)
                      <Letter> = " (re->gram letter-pattern) "
                      <NonZeroDigit> = " (re->gram natural-pattern) "
                      <Digit> = '0'|NonZeroDigit"))

(def unary-grammar (str
                    "<Root> = (S|Rest)*
                    <S> = Rest* Unary Rest+
                    Unary = " unary-negation-pattern "
                    <Rest> = '('? " (wrap-w* (re->gram alphabet-pattern)) " ')'? " (wrap-w* (optional operator-pattern)) " Rest* "))
(defn handle-negation [acc token]
  (let [tokens-processed (count acc)
        start? (= 0 tokens-processed)]
    (match token
      [:Unary head & rest]
      (let [addition-head? (= head "+")
            negation-head? (= head "-")
            negation-count (count rest)
            negation? (= 1 (mod negation-count 2))]
        (concat acc
                (match [start? negation? addition-head? negation-head?]
                  [true true _ _] ["~"]
                  [true false _ _] acc
                  [_ false false false] [head]
                  [_ true false false] [head "~"]
                  [_ false _ true] ["-"]
                  [_ true true _] ["-"]
                  [_ false true _] ["+"]
                  [_ true _ true] ["+"])))
      :else (concat acc [token]))))

(defn process-unary [source]
  (let [parse-unary (insta/parser unary-grammar)]
    (reduce handle-negation [] (parse-unary source))))


(defn convert-postfix [{:keys [stack postfix]} litOrOp]
  (match [litOrOp]
    ["~"] (if (> (count postfix) 0) {:stack stack :postfix (concat postfix [-1 "*"])} {:stack (concat stack ["*"]) :postfix (concat postfix [-1])})
    ["("] {:stack (concat stack [litOrOp]) :postfix postfix}
    [")"] (let [popped (take-while #(not= "(" %) (reverse stack))
                remaining (take-while #(not= "(" %) stack)]
            {:stack remaining :postfix (concat postfix popped)})
    :else (let [next-pf (concat postfix [litOrOp])
                op-pf? (> (count next-pf) 1)
                op-stack? (matches-operator? (last stack))
                paren-stack? (not (nil? (some #(= "(" %) stack)))
                is-lit?  (matches-literal? litOrOp)
                newStack (match [op-stack? op-pf? paren-stack? is-lit?]
                           [true true false true] (butlast stack)
                           [true true false false] (concat (butlast stack) [litOrOp])
                           [_ _ _ true] stack
                           [_ _ _ false] (concat stack [litOrOp]))
                newPostFix (match [op-stack? op-pf? paren-stack? is-lit?]
                             [true true true false] (concat postfix [(last stack)])
                             [true true false true] (concat next-pf [(last stack)])
                             [true true false false] next-pf
                             [_ _ _ true] next-pf
                             [_ _ _ false] postfix)]
            {:stack newStack :postfix newPostFix})))

(defn reduce-postfix
  ([input] (let
            [{:keys [stack postfix]} (reduce convert-postfix {:stack [] :postfix []} input)]
             (if (= 0 (count stack))
               postfix
               (concat postfix (reverse stack))))))
(defn solve-postfix [s v] (let [digit? (integer? v)]
                            (if digit? (concat s [v])
                                (concat (butlast (butlast s)) [(apply v [(last (butlast s)) (last s)])]))))
(defn to-primitive [t] (let [token (str t)
                             digit? (matches-literal? token)]
                         (if digit? (str->int token)
                             (match [t]
                               ["+"] #(+ %1 %2)
                               ["-"] #(- %1 %2)
                               ["*"] #(* %1 %2)))))

(defn assign-lit [vars name lit] (assoc vars name (str->int lit)))
(defn resolve-id [vars id] (let [value (get vars id)
                                 value? (not (nil? value))]
                             (if value? value (throw #?(:clj (Throwable. (str "Lookup Error: Undeclared Variable " id))
                                                        :cljs (str "Lookup Error: Undeclared Variable " id))))))
(defn resolve-all [vars exp-terms]
  (map (fn [et]
         (match et
           [:Literal lit] (str->int lit)
           [:Identifier id] (resolve-id vars id)
           :else et)) exp-terms))
(defn matcher [variable-map assignment]
  (match assignment
    [:Assignment [:Identifier name] [:Literal & rest]] (assign-lit variable-map name (apply str rest))
    [:Assignment [:Identifier name] [:Identifier id]] (assign-lit variable-map name (resolve-id variable-map id))
    [:Assignment [:Identifier name] & r] (let [resolved-ids (apply str (resolve-all variable-map r))
                                               resolved-unary (process-unary resolved-ids)
                                               postfix-transform (reduce-postfix resolved-unary)
                                               primitive-transform (map to-primitive postfix-transform)
                                               result (first (reduce solve-postfix [] primitive-transform))]
                                           (assign-lit variable-map name result))))

(def parser (insta/parser lang-grammar))

(defn interpreter [source]
  (let [AST (parser source) 
        variables {}]
    (cond 
      (:reason AST) (str "Syntax Error: Expecting { " (apply str (drop 3 (reduce #(str %1 " or " (:expecting %2)) "" (:reason AST)))) " }") 
      :else (try (reduce matcher variables AST) #?(:clj (catch Throwable e (str e))
                                                   :cljs (catch :default e e))))))

#?(:browser (do
              (def input-state (r/atom ""))
              (def output-state (r/atom ""))
              (defn app [props]
                [:div
                 "Source Code: "
                 [:br]
                 [:textarea {:on-change (fn [evt] (reset! input-state (.-value (.-target evt)))) :rows "10" :columns "50"}]
                 [:br]
                 [:button {:on-click #(reset! output-state (interpreter @input-state))} "Submit"]
                 [:div "Output: "]
                 [:br]
                 [:div (str @output-state)]])))

#?(:browser (defn -main [] (let [root (.getElementById js/document "root")] (rdom/render [app] root)))
   :default (defn -main 
              ([] nil)
              ([filepath]
              (let
               [input (readFileSync filepath #?(:cljs #js{:encoding "utf8"}))
                output (interpreter input)]
                (if (string? output) 
                  (println output)
                (doseq [[id val] output] (println (str id " = " val))))))))

#?(:browser (do (-main)))
;; #?(:clj (defn readFileSync [p] (slurp p)))

;; (defn whitespace [q] #(str \< \# \" "\\s" q \" \>))
;; (def w? (whitespace \?))
;; ;; (def w* (whitespace \*))
;; (def w+ (whitespace \+))
;; (defn wrap
;;   ([f] #(wrap % f))
;;   ([r f] (str (f) \' r \' (f))))

;; #?(:clj (defn str->int [s] (if (integer? s) s (Integer/parseInt s)))
;;    :cljs (defn str->int [s] (int s)))
;; (defn negation* [res t]
;;   (println (str "Res = " res ", t = " t))
;;   (match t
;;     [:Unary head & rest] (let [start? (= 0 (count res))
;;                                nn (mod (if start? (inc (count rest)) (if (= head "-") (inc (count rest)) (count rest))) 2)]
;;                            (concat res (if start?
;;                                          (if (= 0 nn) res "~")
;;                                          (if (= head "-")
;;                                            [(if (= 0 nn)
;;                                               "+"
;;                                               "-")]
;;                                            (if (= head "+")
;;                                              (if (= 0 nn)
;;                                                []
;;                                                ["-"])
;;                                              (if (= 0 nn)
;;                                                [head]
;;                                                [head "~"]))))))
;;     :else (concat res [t])))
;; (defn replace-negation [s] (let [parse-unary (insta/parser "<Root> = (S|Rest)*
;;                                   <S> = Rest* Unary Rest+
;;                                   Unary = ('*'|'+'|'-'|'(')+ '-'
;;                                   <Rest> = '('? <#'\\s*'> #'[0-9a-zA-Z_]+' <#'\\s*'> ')'? <#'\\s*'> ('*'|'+'|'-')? <#'\\s*'> '('? #'[0-9a-zA-Z_]+'? ')'? ")
;;                                  res (reduce negation* [] (parse-unary s))]
;;                              (println
;;                               (str "Replace Unary = " res " Unary tree = " (parse-unary s)))
;;                              res))
;; (def wrap-w? (wrap w*))

;; (defn assign-lit [vars name lit] (assoc vars name (str->int lit)))
;; (defn resolve-id [vars id] (let [value (get vars id)
;;                                  value? (not (nil? value))]
;;                              (if value? value (throw "Undeclared Variable"))))

;; (defn resolve-all [vars exp-terms]
;;   (map (fn [et]
;;          (match et
;;            [:Literal lit] (str->int lit)
;;            [:Identifier id] (resolve-id vars id)
;;            :else et)) exp-terms))



;; (defn solve-postfix [s v] (let [digit? (integer? v)]
;;                             (if digit? (concat s [v])
;;                                 (concat (butlast (butlast s)) [(apply v [(last (butlast s)) (last s)])]))))
;; (defn to-primitive [t] (let [token (str t)
;;                              digit? (< 0 (count (re-matches #"-?[0-9]+" token)))]
;;                          (println (str "Current Token = " token))
;;                          (if digit? (str->int token)
;;                              (match [t]
;;                                ["+"] #(+ %1 %2)
;;                                ["-"] #(- %1 %2)
;;                                ["*"] #(* %1 %2)))))

;; (defn matcher [variable-map assignment]
;;   (match assignment
;;     ;; [:Assignment [:Identifier name] "-" [:Literal & rest]] (assign-lit variable-map name (str \- (apply str rest)))
;;     [:Assignment [:Identifier name] [:Literal & rest]] (assign-lit variable-map name (apply str rest))
;;     [:Assignment [:Identifier name] [:Identifier id]] (assign-lit variable-map name (resolve-id variable-map id))
;;     [:Assignment [:Identifier name] & r] (do (println "Got the thing...")
;;                                              (println "Current map: ")
;;                                              ;;(pprint variable-map)
;;                                              (println "Resolving ids...")
;;                                              (let
;;                                               [])
;;                                              ;;(pprint (apply str (resolve-all variable-map r)))

;;                                             ;; (pprint assignment (:postfix (reduce to-postfix {:stack [] :postfix []} (resolve-all variable-map r)))) 
;;                                              (assign-lit variable-map name
;;                                                          (first
;;                                                           (reduce solve-postfix []
;;                                                                   (map to-primitive
;;                                                                        (let  [{:keys [stack postfix]}
;;                                                                               (reduce to-postfix {:stack [] :postfix []}
;;                                                                                       (replace-negation (apply str (resolve-all variable-map r))))]
;;                                                                          (if (= 0 (count stack))
;;                                                                            postfix
;;                                                                            (concat postfix (reverse stack)))))))))))

;; (defn primitive-op? [c] (or (= c "+") (= c "-") (= c "*")))
;; (defn to-postfix [{:keys [stack postfix]} litOrOp]
;;   (match [litOrOp]
;;     ;;[:Literal lit] (do (println (str "Got int = " lit ", stack = " stack ", postfix = " postfix)) (let [] {:stack stack :postfix (concat postfix [lit])}))
;;     ["~"] (if (> (count postfix) 0) {:stack stack :postfix (concat postfix [-1 "*"])} {:stack (concat stack ["*"]) :postfix (concat postfix [-1])})
;;     ["("] {:stack (concat stack [litOrOp]) :postfix postfix}
;;     ;; [(:or \( \- \+ \*)] {:stack (concat stack [litOrOp]) :postfix postfix}
;;     [")"] (let [popped (take-while #(not= "(" %) (reverse stack))
;;                 remaining (take-while (partial not= "(") stack)]
;;             (println (str "closing parenthesis, popped = " popped " , remaining = " remaining " postfix = " (concat postfix popped)))
;;             {:stack remaining :postfix (concat postfix popped)})
;;     :else ;;(do 
;;             ;; (println (str "Got int = " litOrOp ", stack = " stack ", postfix = " postfix))
;;     (let [next-pf (concat postfix [litOrOp])]
;;                 ;; (println (str "is primitive = " (primitive-op? (last stack)) " count gt 1 = " (> (count next-pf) 1) " return = "   (if (and (primitive-op? (last stack)) (> (count next-pf) 1))

;;                 ;;                                                                                                                      (if (some #(= "(" %) stack)
;;                 ;;                                                                                                                        {:stack (if  (= 0 (count (re-matches #"-?[0-9]+" litOrOp))) (concat stack [litOrOp]) stack) :postfix  (if (= 0 (count (re-matches #"-?[0-9]+" litOrOp))) (concat postfix [(last stack)]) next-pf)}
;;                 ;;                                                                                                                        {:stack (if (= 0 (count (re-matches #"-?[0-9]+" litOrOp))) (concat (butlast stack) [litOrOp]) (butlast stack)) :postfix (if (= 0 (count (re-matches #"-?[0-9]+" litOrOp))) next-pf (concat next-pf [(last stack)]))})
;;                 ;;                                                                                                                      (if (and (some #(= "(" %) stack) (= 0 (count (re-matches #"-?[0-9]+" litOrOp))))
;;                 ;;                                                                                                                        {:stack (concat stack [litOrOp]) :postfix postfix}
;;                 ;;                                                                                                                        {:stack (if (= 0 (count (re-matches #"-?[0-9]+" litOrOp))) (concat stack [litOrOp]) stack) :postfix (if (= 0 (count (re-matches #"-?[0-9]+" litOrOp))) postfix next-pf)}))))
;;       (if (and (primitive-op? (last stack)) (> (count next-pf) 1))

;;         (if (some #(= "(" %) stack)
;;           {:stack (if  (= 0 (count (re-matches #"-?[0-9]+" litOrOp))) (concat stack [litOrOp]) stack) :postfix  (if (= 0 (count (re-matches #"-?[0-9]+" litOrOp))) (concat postfix [(last stack)]) next-pf)}
;;           {:stack (if (= 0 (count (re-matches #"-?[0-9]+" litOrOp))) (concat (butlast stack) [litOrOp]) (butlast stack)) :postfix (if (= 0 (count (re-matches #"-?[0-9]+" litOrOp))) next-pf (concat next-pf [(last stack)]))})
;;         (if (and (some #(= "(" %) stack) (= 0 (count (re-matches #"-?[0-9]+" litOrOp))))
;;           {:stack (concat stack [litOrOp]) :postfix postfix}
;;           {:stack (if (= 0 (count (re-matches #"-?[0-9]+" litOrOp))) (concat stack [litOrOp]) stack) :postfix (if (= 0 (count (re-matches #"-?[0-9]+" litOrOp))) postfix next-pf)}))))
;;     ;; (do (println (str "Got string = " litOrOp ", stack = " stack ", postfix = " postfix))
;;     ;;          (match [litOrOp]
;;     ;;            [(:or \( \- \+ \*)] {:stack (concat stack [litOrOp]) :postfix postfix}
;;     ;;            [\)] (let [popped (take-while #(and (not= \( %) ) (reverse stack))
;;     ;;                       remaining (take-while (partial not= \() stack)] {:stack remaining :postfix (concat postfix popped)})
;;     ;;            ))
;; );;)



;; (Input) Source 
;;   --- Parse(lang-grammar, source) -->  
;;    reduce (AST[Assignments[(Identifier, Simple | Complex)]], EmptyVariableMap)
;;      --- Case Identifier = (Literal | Identifier): Simple Expressions (Aliasing and Direct Assignment) -->
;;        VariableMap { Identifier = Literal } | AliasingError
;;      --- Case Identifier = Exp: Complex Expressions (Infix Arithmetic with Unary and/or Binary operators) -->
;;        - Resolve all Identifiers to literals and replace | LookupError
;;        - Handle Unary (
;;            Ignore unary +, 
;;            Remove superfluous negations, 
;;            Replace a+-b with a-b and a--b with a+b, 
;;            Replace unary negation with ~ 
;;        )
;;        - Convert to post-fix artihmetic stack (
;;            Replace ~ on stack with [*, -1],
;;            Process parenthesis
;;        )
;;        - Solve Postfix using stack solver (reduce to 1 element)
;;        VariableMap {Identifier = (head PostfixStack)}

;; (defn -main [filepath]
;;   (println (str "Input filepath = " filepath))
;;   (let
;;    [input (readFileSync filepath #?(:cljs #js{:encoding "utf8"}))
;;     parser
;;     (insta/parser (str "
;;                       <Program> = Assignment*
;;                       Assignment = Identifier <" (wrap-w? \=) "> Exp <';'> " (w*) "
;;                       <Exp> = Exp " (wrap-w? \+) " Term | Exp " (wrap-w? \-) " Term | Term
;;                       <Term> = Term " (wrap-w? \*) " Fact | Fact
;;                       <Fact> = " (wrap-w? \() " Exp " (wrap-w? \)) " | '-' Fact | <'+'> Fact | Literal | Identifier 
;;                       Identifier = Letter (Letter | Digit)*
;;                       Literal = '0' | (NonZeroDigit Digit*)
;;                       <Letter> = " (reduce #(str %1  "|" %2) (concat (map #(str \' (char %) \') (concat (range 65 91) (range 97 123))) ["'_'"])) "
;;                       <NonZeroDigit> = '1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'
;;                       <Digit> = '0'|NonZeroDigit"))
;;         ;;input "a = 12; b = 15; c = a *-(a * b); d = a * b - c;"
;;     AST (parser input)
;;     output (do
;;              (println "Operator Rule")
;;                  ;;(pprint (operator-rule "---(x+y)*(x+-y)"))
;;                  ;;(pprint AST)
;;              (reduce matcher {} AST))]
;;     ;;(pprint AST)
;;     (doseq [[id val] output] (println (str id " = " val)))))

;; [:Assignment 
;;  [:Identifier "z"] 
;;  [:Fact "-" [:Fact "-" [:Fact "-" [:Fact "(" [:Fact [:Literal "1"]] "+" [:Fact [:Literal "2"]] ")"]]]] 
;;  "*" 
;;  [:Fact "(" [:Fact [:Literal "3"]] "+" [:Fact "-" [:Fact [:Literal "4"]]] ")"]]

;; [:Assignment 
;;  [:Identifier "z"] 
;;  [[:Fact "-" [:Fact "-" [:Fact "(" [:Fact [:Literal "1"]] "+" [:Fact [:Literal "2"]] ")"]]] "*" :Fact [:Fact [:Literal "-1"]]] 
;;  "*" 
;;  [:Fact "(" [:Fact [:Literal "3"]] "+" [:Fact "-" [:Fact [:Literal "4"]]] ")"]]

;; [:Assignment 
;;  [:Identifier "z"] 
;;  [:Fact "(" [:Fact [:Literal "1"]] "+" [:Fact [:Literal "2"]] ")" "*" :Fact [:Fact [:Literal "-1"]]] 
;;  "*" 
;;  [:Fact "(" [:Fact [:Literal "3"]] "+" [:Fact "-" [:Fact [:Literal "4"]]] ")"]]