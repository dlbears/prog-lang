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
                    <Rest> = '('* " (wrap-w* (re->gram alphabet-pattern)) " ')'* " (wrap-w* (optional operator-pattern)) " Rest* "))
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
    (butlast (reduce handle-negation [] (parse-unary (str "(" source ")"))))))


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
    [:Assignment [:Identifier & name] [:Literal & rest]] (assign-lit variable-map (apply str name) (apply str rest))
    [:Assignment [:Identifier & name] [:Identifier & id]] (assign-lit variable-map (apply str name) (resolve-id variable-map (apply str id)))
    [:Assignment [:Identifier & name] & r] (let [resolved-ids (apply str (resolve-all variable-map r))
                                       
                                               resolved-unary (process-unary resolved-ids)
                                
                                               postfix-transform (reduce-postfix resolved-unary)
                                          
                                               primitive-transform (map to-primitive postfix-transform)
                                               result (first (reduce solve-postfix [] primitive-transform))]
                                           (assign-lit variable-map (apply str name) result))))

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
