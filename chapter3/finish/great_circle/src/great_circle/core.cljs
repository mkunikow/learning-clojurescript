(ns great_circle.core
  (:require [clojure.browser.repl :as repl]
            [domina :as dom]
            [domina.events :as ev]))

(defonce conn
  (repl/connect "http://localhost:9000/repl"))

(enable-console-print!)

;; Mean radius of earth in km.
(def R 6371)

(defn radians [degrees]
  (/ (* degrees (.-PI js/Math)) 180))

(defn haversin [x]
  (let [s (.sin js/Math (/ x 2))]
    (* s s)))

(defn distance [lat1 lon1 lat2 lon2]
  (let [Δlon (- lon1 lon2)
        Δlat (- lat1 lat2)
        a (+ (haversin Δlat) (* (.cos js/Math lat1) (.cos js/Math lat2) (haversin Δlon)))
        c (* 2 (.asin js/Math (.min js/Math 1 (.sqrt js/Math a))))
        d (* R c)]
    d))

(defn get-radians [field]
  (radians (.parseFloat js/window (.-value (dom/by-id field)))))

(defn calc-distance [evt]
  (let  [lat1 (get-radians "lat1")
         lat2 (get-radians "lat2")
         lon1 (get-radians "lon1")
         lon2 (get-radians "lon2")
         d (distance lat1 lon1 lat2 lon2)]
  (dom/set-text! (dom/by-id "km") d)))

(ev/listen! (dom/by-id "calculate") "click" calc-distance)
