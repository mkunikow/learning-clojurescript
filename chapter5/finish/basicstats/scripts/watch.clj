(require '[cljs.closure :as cljsc])

(cljsc/watch "src"
  {:main 'basicstats.core
   :output-to "out/basicstats.js"
   :output-dir "out"
   :optimizations :none
   :cache-analysis true
   :source-map true})
