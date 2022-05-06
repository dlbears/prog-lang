#?(:cljs 
   (ns server.app
  (:require [instaparse.core :as insta]
            ["fs" :refer [readFileSync]]
               [cljs.core.match :refer-macros [match]]
               [cljs.core :refer [re-matches]]
               [cljs.pprint :refer [pprint]]
  ))
   :clj
  (ns server.app ( :require [instaparse.core :as insta]
               [clojure.core.match :refer [match]]
               [clojure.core :refer [re-matches slurp]]
               [clojure.tools.cli :refer [parse-opts]])
               (:gen-class))
                     ;; [clojure.pprint :as pprint]
               )
  ;;#?(:cljs (:require-macros [cljs.core.match])))


#?(:clj (defn readFileSync [p] (slurp p)))

(defn whitespace [q] #(str \< \# \" "\\s" q \" \>))
(def w? (whitespace \?))
(def w* (whitespace \*))
(def w+ (whitespace \+))
(defn wrap 
  ([f] #(wrap % f))
  ([r f] (str (f) \' r \' (f))) )

#?(
   :clj (defn str->int [s] (if (integer? s) s (Integer/parseInt s)))
   :cljs (defn str->int [s] (int s) )
)
(defn negation* [res t] 
  (println (str "Res = " res ", t = " t))
  (match t
    [:Unary head & rest] (let [start? (= 0 (count res))
                               nn (mod (if start? (inc (count rest)) (if (= head "-") (inc (count rest)) (count rest)) ) 2)]
                           (concat res (if start?
                                         (if (= 0 nn) res "~")
                                         (if (= head "-")
                                           [(if (= 0 nn)
                                             "+"
                                             "-")]
                                           (if (= head "+")
                                             (if (= 0 nn)
                                               []
                                               ["-"])
                                             (if (= 0 nn)
                                               [head]
                                               [head "~"]))))))
    :else (concat res [t])))
(defn replace-negation [s] (let [parse-unary (insta/parser "<Root> = (S|Rest)*
                                  <S> = Rest* Unary Rest+
                                  Unary = ('*'|'+'|'-'|'(')+ '-'
                                  <Rest> = '('? <#'\\s*'> #'[0-9a-zA-Z_]+' <#'\\s*'> ')'? <#'\\s*'> ('*'|'+'|'-')? <#'\\s*'> '('? #'[0-9a-zA-Z_]+'? ')'? ")
                                 res (reduce negation* [] (parse-unary s))]
                             (println
                              (str "Replace Unary = " res " Unary tree = " (parse-unary s)))
                             res))
(def wrap-w? (wrap w*))

(defn assign-lit [vars name lit] (assoc vars name (str->int lit)))
(defn resolve-id [vars id] (let [value (get vars id)
                                 value? (not (nil? value))]
                             (if value? value (throw "Undeclared Variable"))))

(defn resolve-all [vars exp-terms] 
  (map (fn [et] 
         (match et
           [:Literal lit] (str->int lit)
           [:Identifier id] (resolve-id vars id)
           :else et)
         ) exp-terms))

(defn primitive-op? [c] (or (= c "+") (= c "-") (= c "*")))

(defn solve-postfix [s v] (let [digit? (integer? v)]
                            (if digit? (concat s [v])
                                (concat (butlast (butlast s)) [(apply v [(last (butlast s)) (last s)])]))))
(defn to-primitive [t] (let [token (str t)
                             digit? (< 0 (count (re-matches #"-?[0-9]+" token)))]
                         (println (str "Current Token = " token))
                         (if digit? (str->int token)
                             (match [t]
                               ["+"] #(+ %1 %2)
                               ["-"] #(- %1 %2)
                               ["*"] #(* %1 %2)))))
(defn to-postfix [{:keys [stack postfix]} litOrOp] 
  (match [litOrOp]
    ;;[:Literal lit] (do (println (str "Got int = " lit ", stack = " stack ", postfix = " postfix)) (let [] {:stack stack :postfix (concat postfix [lit])}))
    ["~"] (if (> (count postfix) 0) {:stack stack :postfix (concat postfix [-1 "*"])} {:stack (concat stack ["*"]) :postfix (concat postfix [-1])})
    ["("] {:stack (concat stack [litOrOp]) :postfix postfix}
    ;; [(:or \( \- \+ \*)] {:stack (concat stack [litOrOp]) :postfix postfix}
    [")"] (let [popped (take-while #(not= "(" %) (reverse stack))
               remaining (take-while (partial not= "(") stack)] 
           (println (str "closing parenthesis, popped = " popped " , remaining = " remaining " postfix = " (concat postfix popped)))
           {:stack remaining :postfix (concat postfix popped)})
    :else (do (println (str "Got int = " litOrOp ", stack = " stack ", postfix = " postfix))  
              (let [next-pf (concat postfix [litOrOp])] 
                (println (str "is primitive = " (primitive-op? (last stack)) " count gt 1 = " (> (count next-pf) 1) " return = "   (if (and (primitive-op? (last stack)) (> (count next-pf) 1))

                                                                                                                                     (if (some #(= "(" %) stack)
                                                                                                                                       {:stack (if  (= 0 (count (re-matches #"-?[0-9]+" litOrOp))) (concat stack [litOrOp]) stack) :postfix  (if (= 0 (count (re-matches #"-?[0-9]+" litOrOp))) (concat postfix [(last stack)]) next-pf)}
                                                                                                                                       {:stack (if (= 0 (count (re-matches #"-?[0-9]+" litOrOp))) (concat (butlast stack) [litOrOp]) (butlast stack)) :postfix (if (= 0 (count (re-matches #"-?[0-9]+" litOrOp))) next-pf (concat next-pf [(last stack)]))})
                                                                                                                                     (if (and (some #(= "(" %) stack) (= 0 (count (re-matches #"-?[0-9]+" litOrOp))))
                                                                                                                                       {:stack (concat stack [litOrOp]) :postfix postfix}
                                                                                                                                       {:stack (if (= 0 (count (re-matches #"-?[0-9]+" litOrOp))) (concat stack [litOrOp]) stack) :postfix (if (= 0 (count (re-matches #"-?[0-9]+" litOrOp))) postfix next-pf)}))))
                (if (and (primitive-op? (last stack)) (> (count next-pf) 1))

                  (if (some #(= "(" %) stack)
                    {:stack (if  (= 0 (count (re-matches #"-?[0-9]+" litOrOp))) (concat stack [litOrOp]) stack) :postfix  (if (= 0 (count (re-matches #"-?[0-9]+" litOrOp))) (concat postfix [(last stack)]) next-pf)}
                    {:stack (if (= 0 (count (re-matches #"-?[0-9]+" litOrOp))) (concat (butlast stack) [litOrOp]) (butlast stack)) :postfix (if (= 0 (count (re-matches #"-?[0-9]+" litOrOp))) next-pf (concat next-pf [(last stack)]))})
                  (if (and (some #(= "(" %) stack) (= 0 (count (re-matches #"-?[0-9]+" litOrOp))))
                    {:stack (concat stack [litOrOp]) :postfix postfix}
                    {:stack (if (= 0 (count (re-matches #"-?[0-9]+" litOrOp))) (concat stack [litOrOp]) stack) :postfix (if (= 0 (count (re-matches #"-?[0-9]+" litOrOp))) postfix next-pf)}))))
    ;; (do (println (str "Got string = " litOrOp ", stack = " stack ", postfix = " postfix))
    ;;          (match [litOrOp]
    ;;            [(:or \( \- \+ \*)] {:stack (concat stack [litOrOp]) :postfix postfix}
    ;;            [\)] (let [popped (take-while #(and (not= \( %) ) (reverse stack))
    ;;                       remaining (take-while (partial not= \() stack)] {:stack remaining :postfix (concat postfix popped)})
    ;;            ))
    ))
(defn matcher [variable-map assignment] 
  (match assignment
    [:Assignment [:Identifier name] "-" [:Literal & rest]] (assign-lit variable-map name (str \- (apply str rest)))
    [:Assignment [:Identifier name] [:Literal & rest]] (assign-lit variable-map name (apply str rest))
    [:Assignment [:Identifier name] [:Identifier id]] (assign-lit variable-map name (resolve-id variable-map id))
    [:Assignment [:Identifier name] & r] (do (println "Got the thing...")
                                             (println "Current map: ")
                                             ;;(pprint variable-map)
                                             (println "Resolving ids...")
                                             ;;(pprint (apply str (resolve-all variable-map r)))
                                             
                                            ;; (pprint assignment (:postfix (reduce to-postfix {:stack [] :postfix []} (resolve-all variable-map r)))) 
                                             (assign-lit variable-map name (first (reduce solve-postfix [] (map to-primitive (let  [{:keys [stack postfix]} (reduce to-postfix {:stack [] :postfix []} (replace-negation (apply str (resolve-all variable-map r))))]
                                                                                                                               (if (= 0 (count stack)) 
                                                                                                                                 postfix
                                                                                                                                 (concat postfix (reverse stack)))))))))
    ))
(defn -main [filepath]
  (println (str "Input filepath = " filepath ))
  (let 
   [input (readFileSync filepath #?(:cljs #js{:encoding "utf8"}))
    parser 
        (insta/parser (str "
                      <Program> = Assignment*
                      Assignment = Identifier <" (wrap-w? \=) "> Exp <';'> " (w*)"
                      <Exp> = Exp " (wrap-w? \+) " Term | Exp " (wrap-w? \-) " Term | Term
                      <Term> = Term " (wrap-w? \*) " Fact | Fact
                      <Fact> = " (wrap-w? \() " Exp " (wrap-w? \)) " | '-' Fact | <'+'> Fact | Literal | Identifier 
                      Identifier = Letter (Letter | Digit)*
                      Literal = '0' | (NonZeroDigit Digit*)
                      <Letter> = " (reduce #(str %1  "|" %2) (concat (map #(str \' (char %) \') (concat (range 65 91) (range 97 123))) ["'_'"])) "
                      <NonZeroDigit> = '1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'
                      <Digit> = '0'|NonZeroDigit"))
        ;;input "a = 12; b = 15; c = a *-(a * b); d = a * b - c;"
        AST (parser input)
        output (do 
                 (println "Operator Rule")
                 ;;(pprint (operator-rule "---(x+y)*(x+-y)"))
                 ;;(pprint AST)
                 (reduce matcher {} AST))
        ]
    ;;(pprint AST)
    (doseq [[id val] output] (println (str id " = " val)))
    ))

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