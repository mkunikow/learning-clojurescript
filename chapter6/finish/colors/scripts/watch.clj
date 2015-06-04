(require '[cljs.closure :as cljsc])

(cljsc/watch "src"
  {:main 'colors.core
   :output-to "out/colors.js"
   :output-dir "out"
   :optimizations :none
   :cache-analysis true
   :source-map true})
