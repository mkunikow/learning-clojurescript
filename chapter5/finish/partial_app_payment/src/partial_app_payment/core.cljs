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

(defn float-value [field]
  (.parseFloat js/window (dom/value field)))

(defn make-row [[years amount]]
  (str "<tr><td>" years "</td><td>$"
       (.toFixed amount 2) "</td></tr>"))

(defn show-payments [evt]
  (let [apr (float-value (dom/by-id "apr"))
        principal (float-value (dom/by-id "principal"))
        tbody (dom/by-id "paymentTable")
        years-vector [10 15 20 30]
        part-pmt (partial payment principal apr)
        results (map part-pmt years-vector)]
    (.log js/console results)
    (dom/destroy-children! tbody)
    (doall (map #(dom/append! tbody (make-row %1)) results))))

(ev/listen! (dom/by-id "calculate") "click" show-payments)
