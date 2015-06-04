(require '[cljs.closure :as cljsc])

(cljsc/watch "src"
  {:main 'lazyseq.core
   :output-to "out/lazyseq.js"
   :output-dir "out"
   :optimizations :none
   :cache-analysis true
   :source-map true})
