(ns payment.core
  (:require [clojure.browser.repl :as repl]
            [domina :as dom]
            [domina.events :as ev]))

(defonce conn
  (repl/connect "http://localhost:9000/repl"))

(defn payment [principal years apr]
  (let [r (/ apr (* 12 100))
        n (* years 12)
        rate-factor (.pow js/Math (+ 1 r) n)]
    (/ (* principal r rate-factor) (- rate-factor 1))))

(def principal-field (dom/by-id "principal"))
(def apr-field (dom/by-id "apr"))
(def years-field (dom/by-id "years"))

(defn float-value [field]
  (.parseFloat js/window (dom/value field)))

(defn show-payment [evt]
  (let [apr (float-value apr-field)
        principal (float-value principal-field)
        years (float-value years-field)]
    (dom/set-text! (dom/by-id "payment")
                   (payment principal years apr))))

(ev/listen! (dom/by-id "calculate") "click" show-payment)
