(ns collatz.core
  (:require [clojure.browser.repl :as repl]))

(defonce conn
  (repl/connect "http://localhost:9000/repl"))

(enable-console-print!)

(defn count-steps [n total]
  (if (= n 1)
    total
    (let [next-n (if (even? n) (/ n 2) (inc (* 3 n)))]
      (count-steps next-n (inc total)))))

