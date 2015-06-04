(require '[cljs.closure :as cljsc])

(cljsc/watch "src"
  {:main 'collatz.core
   :output-to "out/collatz.js"
   :output-dir "out"
   :optimizations :none
   :cache-analysis true
   :source-map true})
