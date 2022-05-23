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
(def operator-re "[\\*\\+\\-\\(]")
(def unary-negation-pattern "('*'|'+'|'-'|'(')'-'+") 
(def letter-pattern "[A-z_]")
(def natural-pattern "[1-9]")
(def literal-pattern "-?([1-9]+[0-9]*)|0")

(defn matches-pattern? [pattern] #(let
                                   [input (str %)
                                    matches (if (= 0 (count input)) nil (re-matches (re-pattern pattern) input))
                                    something? (not (nil? matches))]
                                    something?))
(def matches-literal? (matches-pattern? literal-pattern))
(def matches-operator? (matches-pattern? operator-re))

(defn re->gram [pattern] (str "#'" pattern "'"))
(defn op-precedence [op] (match [op]
                           ["*"] 2
                           ["-"] 1
                           ["+"] 1
                           ["("] 0
                           :else -1))

(def sigma-pattern (str "('*'|'+'|'-'|'('|')'|" (re->gram alphabet-pattern)  ")"))
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
  (let [parse-unary (insta/parser unary-grammar)
        wrapped-src (if (and (= \( (first source)) (= \) (last source))) source (str "(" source ")"))
        unary-ast (parse-unary wrapped-src)
        left-parens (count (filter #(= % "(") unary-ast))
        right-parens (count (filter #(= % ")") unary-ast))
        trim-ast (cond (>= left-parens right-parens) (rest unary-ast) 
                       (< left-parens right-parens) unary-ast)]
    (butlast (reduce handle-negation [] trim-ast))))

(defn convert-postfix [{:keys [stack postfix]} token]
  (let [literal? (matches-literal? token)]
    (if literal? {:stack stack :postfix (concat postfix [token])}
        (match [token]
          ["~"] (if (> (count postfix) 0) {:stack stack :postfix (concat postfix [-1 "*"])} {:stack (concat stack ["*"]) :postfix (concat postfix [-1])})
          ["("] {:stack (concat stack [token]) :postfix postfix}
          [")"] (let [paren-cond #(and (not= "(" %) (not= "$" %))
                      popped (take-while paren-cond (reverse stack))
                      remaining (drop-last (inc (count popped)) stack)]
                  {:stack remaining :postfix (concat postfix popped)})
          :else (let [prec-stack (op-precedence (last stack))
                      prec-token (op-precedence token)
                      res (if (> prec-token prec-stack)
                            {:stack (concat stack [token]) :postfix postfix}
                            (let [prec-cond #(and (not= "$" %) (<= prec-token (op-precedence %)))
                                  popped (take-while prec-cond (reverse stack))
                                  remaining (drop-last (count popped) stack)]
                              {:stack (concat remaining [token]) :postfix (concat postfix popped)}))]
                  res)))))

(defn reduce-postfix
  ([input]
   (let
    [{:keys [stack postfix]} (reduce convert-postfix {:stack ["$"] :postfix []} input)]
     (if (= 0 (count stack))
       postfix
       (concat postfix (reverse (drop 1 stack)))))))
(defn solve-postfix [s v] (let [digit? (integer? v)]
                            (if digit? (concat s [v])
                                (let [res (apply v [(last (butlast s)) (last s)])]
                                  (concat (butlast (butlast s)) [res])))))
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
           [:Literal & lit] (str->int (apply str lit))
           [:Identifier & id] (resolve-id vars (apply str id))
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
                 (let [output @output-state
                       output-string? (string? output)]
                   (if output-string? [:div output]
                       (map (fn [[k v]] [:div (str k " = " v)]) (seq output))))])))

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
