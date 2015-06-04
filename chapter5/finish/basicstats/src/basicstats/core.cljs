(ns basicstats.core
  (:require [clojure.browser.repl :as repl]
            [clojure.string :as cstr]
            [domina :as dom]
            [domina.events :as ev]
            [basicstats.stats :as stats :refer [mean median]]))

(defonce conn
  (repl/connect "http://localhost:9000/repl"))

(defn calculate [evt]
  (let [numbers (dom/value (dom/by-id "numbers"))
        values (map #(.parseFloat js/window %1) (cstr/split numbers #"[ ,]+" ))]
    (dom/set-text! (dom/by-id "mean") (mean values))
    (dom/set-text! (dom/by-id "median") (median values))
    (dom/set-text! (dom/by-id "stdv") (stats/standard-deviation values))))

(ev/listen! (dom/by-id "calculate") "click" calculate)