(ns seq_averages.core
  (:require [clojure.browser.repl :as repl]
            [clojure.string :as cstr]
            [domina :as dom]
            [domina.events :as ev]))

(defonce conn
  (repl/connect "http://localhost:9000/repl"))

(defn arithmetic [values]
  (/ (reduce + values) (count values)))

(defn geometric [values]
  (let [nonzero (remove zero? values)
        v (map (fn [x] (.abs js/Math x)) nonzero)
        n (count v)]
    (.pow js/Math (reduce * v) (/ 1.0 n))))

(defn harmonic [values]
  (let [v (remove zero? values)
        recip (map #(/ 1 %1) v)
        n (count v)]
    (/ n (reduce + recip))))

(defn mean [choice values]
    (cond
      (= choice "arithmetic") (arithmetic values)
      (= choice "geometric") (geometric values)
      (= choice "harmonic") (harmonic values)))

(defn calculate [evt]
  (let [choice (dom/value (dom/by-id "meanType"))
        number-string (dom/value (dom/by-id "numbers"))
        numbers (cstr/split number-string #"[ ,]+")
        values (map (fn [x] (.parseFloat js/window x)) numbers)]
    (dom/set-text! (dom/by-id "result") (mean choice values))))

(ev/listen! (dom/by-id "calculate") "click" calculate)