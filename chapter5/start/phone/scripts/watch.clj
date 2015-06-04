(require '[cljs.closure :as cljsc])

(cljsc/watch "src"
  {:main 'phone.core
   :output-to "out/phone.js"
   :output-dir "out"
   :optimizations :none
   :cache-analysis true
   :source-map true})
