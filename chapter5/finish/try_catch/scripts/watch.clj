(require '[cljs.closure :as cljsc])

(cljsc/watch "src"
  {:main 'try_catch.core
   :output-to "out/try_catch.js"
   :output-dir "out"
   :optimizations :none
   :cache-analysis true
   :source-map true})
