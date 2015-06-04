(ns collatz.core
  (:require [clojure.browser.repl :as repl]))

(defonce conn
  (repl/connect "http://localhost:9000/repl"))

(enable-console-print!)

(defn count-steps [n total]
   (if (= n 1)
     total
     (let [next-n (if (even? n) (/ n 2) (inc (* 3 n)))]
       (recur next-n (inc total)))))

(defn count-steps-arity
  "Use a multi-arity function to allow count-steps to need
   only one parameter"
  ([n] (count-steps n 0))
  ([n total]
   (if (= n 1)
     total
     (let [next-n (if (even? n) (/ n 2) (inc (* 3 n)))]
       (recur next-n (inc total))))))

(defn count-steps-loop [start]
  "Use loop to allow count-steps to need only one parameter"
  (loop [n start
         total 0]
    (if (= n 1)
      total
      (let [next-n (if (even? n) (/ n 2) (inc (* 3 n)))]
        (recur next-n (inc total))))))

(defn sum-up-to [n total]
  (if (= n 0)
    total
    (recur (dec n) (+ n total))))

(println (sum-up-to 25000 0))
