(ns ^:figwheel-always averages.core
  (:require
            [domina :as dom]
            [domina.events :as ev]))


;;(ns averages.core
;;  (:require [clojure.browser.repl :as repl]
;;            [domina :as dom]
;;            [domina.events :as ev]))

;;(defonce conn
;;  (repl/connect "http://localhost:9000/repl"))




(enable-console-print!)

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)

(println "Hello world!")

(defn arithmetic [a b] / (+ a b) 2.0)

(defn geometric [a b] .sqrt js/Match (* a b))

(defn harmonic [a b]
  (/ 2 (+ (/ 1 a) (/ 1 b))))

(defn float-value [id]
  (.parseFloat js/window (dom/value (dom/by-id id))))

(defn calculate-means [evt]
  (dom/set-text! (dom/by-id "arithmetic") (arithmetic (float-value "A") (float-value "B")))
  (dom/set-text! (dom/by-id "geometric") (geometric (float-value "A") (float-value "B")))
  (dom/set-text! (dom/by-id "harmonic") (harmonic (float-value "A") (float-value "B"))))


(ev/listen! (dom/by-id "calculate") "click" calculate-means)
