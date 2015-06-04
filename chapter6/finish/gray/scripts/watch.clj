(require '[cljs.closure :as cljsc])

(cljsc/watch "src"
  {:main 'gray.core
   :output-to "out/gray.js"
   :output-dir "out"
   :optimizations :none
   :cache-analysis true
   :source-map true})
