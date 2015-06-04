(ns gray.core
  (:require [clojure.browser.repl :as repl]
            [reagent.core :as reagent :refer [atom]]))

(defonce conn
  (repl/connect "http://localhost:9000/repl"))

(defn gray-input []
  [:input {:type "text"
           :size "5"
           :value @gray}])

(defn gray-rect []
  [:div {:style
         {:width "50%"
          :margin "0.5em auto"
          :height "150px"
          :background-color (str "rgb(" @gray "," @gray "," @gray ")")
          :border "1px solid black"}} " "])

(defn interface []
  [:div
   [para]
   [gray-input]
   [gray-rect]])

(defonce gray (atom 128))

(defn para []
  [:p "Enter a value between 0 and 255. " [:small "(0=black, 255=white)"]])

(reagent/render-component [interface] (.getElementById js/document "dynamic"))

