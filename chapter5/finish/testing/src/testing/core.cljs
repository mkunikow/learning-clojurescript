(ns testing.core
  (:require [clojure.browser.repl :as repl]))

(defonce conn
  (repl/connect "http://localhost:9000/repl"))

(enable-console-print!)

(def full-name ["Jane" "Nancy" "Fulano"])

(let [given (first full-name)
 middle (second full-name)
 surname (last full-name)]
 (println (str surname "," given " " middle)))


(let [[given middle surname] full-name]
  (println (str surname "," given " " middle)))

(let [given (first full-name)
      other (rest full-name)]
  (println "Given name: " given)
  (println "Remainder of name: " other))

(def endpoints [[5,3] [7,9]])

(let [[[x1 y1] [x2 y2]] endpoints]
  (println (+ (js/Math.abs (- x1 x2)) (js/Math.abs (- x2 y2)))))
