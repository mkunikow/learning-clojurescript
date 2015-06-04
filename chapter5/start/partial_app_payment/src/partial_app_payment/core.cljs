(ns partial_app_payment.core
  (:require [clojure.browser.repl :as repl]
            [domina :as dom]
            [domina.events :as ev]))

(defonce conn
  (repl/connect "http://localhost:9000/repl"))

(defn payment [principal apr years]
  (let [r (/ apr (* 12 100))
        n (* years 12)
        rate-factor (.pow js/Math (+ 1 r) n)]
    (vector years (/ (* principal r rate-factor) (- rate-factor 1)))))

