(ns basicstats.core
  (:require [clojure.browser.repl :as repl]
            [clojure.string :as cstr]
            [domina :as dom]
            [domina.events :as ev]))

(defonce conn
  (repl/connect "http://localhost:9000/repl"))

(defn mean [data]
  (let [n (count data)
        sum (reduce + data)]
    (if (zero? n)
      0
      (/ sum n))))

(defn median [data]
  (let [n (count data)]
    (if (zero? n)
      0
      (let [half (drop (- (int (/ n 2)) 1) (sort data))]
        (if (odd? n)
          (second half)
          (/ (+ (first half) (second half)) 2))))))

(defn standard-deviation [data]
  (let [n (count data)
        [sum sumsq] (reduce
                      (fn [acc x]
                        (list (+ (first acc) x) (+ (last acc) (* x x)))) '(0 0) data)]
    (if (zero? n)
      0
      (js/Math.sqrt (/ (- (* n sumsq) (* sum sum)) (* n (- n 1)))))))

(defn calculate [evt]
  (let [numbers (dom/value (dom/by-id "numbers"))
        values (map #(.parseFloat js/window %1) (cstr/split numbers #"[ ,]+" ))]
    (dom/set-text! (dom/by-id "mean") (mean values))
    (dom/set-text! (dom/by-id "median") (median values))
    (dom/set-text! (dom/by-id "stdv") (standard-deviation values))))

(ev/listen! (dom/by-id "calculate") "click" calculate)