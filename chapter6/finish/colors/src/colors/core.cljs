(ns colors.core
  (:require [clojure.browser.repl :as repl]
            [reagent.core :as reagent :refer [atom]]
            [goog.color :as color]))

(defonce conn
  (repl/connect "http://localhost:9000/repl"))

(enable-console-print!)

;; initial color is bright yellow
(defonce rgbh (atom {:r 255 :g 255 :b 0 :hex "#ffff00"}))

(defn color-square
  "This component is a rectangle whose background color
  is controlled by the value of the :hex key in the rgbh atom"
  []
  (let [{:keys [hex]} @rgbh]
  [:div {:style
         {:width "50%"
          :margin-left "auto"
          :margin-right "auto"
          :height "150px"
          :background-color hex
          :border "1px solid black"}} " "]))

(defn hex-change [event]
  (let [hex (str "#" (.-value (.-target event)))] ;; prepend # to hex value
    (if (color/isValidColor hex) ;; if it's valid
      (let [[r g b] (color/hexToRgb hex)]
        (swap! rgbh assoc :r r :g g :b b :hex hex)) ;; set all fields of rgbh
      (swap! rgbh assoc :hex hex)))) ;; otherwise, just the hex value

(defn hex-input []
  (let [{:keys [hex]} @rgbh]
  [:input {:type "text"
           :size 9
           :value (.substr hex 1)
           :on-change hex-change}]))

(defn in-range
  "Restrict a value to a minimum and maximum; the empty string
  remains unchanged"
  [value minval maxval]
  (if-not (= "" value)
    (let [v (.parseInt js/window value 10)]
      (max minval (min v maxval)))
    (str value)))

(defn rgb-change [event rgb-part]
  (let [{:keys [r g b hex]} @rgbh
        v (in-range (.-value (.-target event)) 0 255)]
    ;; swap in the new color value
    (swap! rgbh assoc rgb-part v)
    ;; then build the hex value from the updated atom
    (swap! rgbh assoc :hex
           (color/rgbToHex (:r @rgbh) (:g @rgbh) (:b @rgbh)))))

(defn rgbfield [rgb-part val]
  [:input {:type "text"
           :size 5
           :value val
           :on-change (fn [event]
                        (rgb-change event rgb-part))}])

(defn percent-change [event rgb-part]
  (let [{:keys [r g b hex]} @rgbh
        v (in-range (.-value (.-target event)) 0 100)]
    (swap! rgbh assoc rgb-part (.toFixed (* 255 (/ v 100)) 0))
    (swap! rgbh assoc :hex
           (color/rgbToHex (:r @rgbh) (:g @rgbh) (:b @rgbh)))))

(defn percentfield [rgb-part val]
  [:input {:type "text"
           :size 4
           :value (.toFixed (* 100 (/ val 255)) 0)
           :on-change (fn [event]
                        (percent-change event rgb-part))}])

(defn everything []
  (let [{:keys [r g b]} @rgbh]
    [:div
     [color-square]
     [:label "Hex: #" [hex-input]]
     [:br]
     [:label "RGB: "]
     [rgbfield :r r]
     [rgbfield :g g]
     [rgbfield :b b]
     [:br]
     [:label "RGB Percent: "]
     [percentfield :r r] "%, "
     [percentfield :g g] "%, "
     [percentfield :b b] "%"]))

(reagent/render-component [everything]
                          (.getElementById js/document "dynamic"))
