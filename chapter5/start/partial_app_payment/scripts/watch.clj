(require '[cljs.closure :as cljsc])

(cljsc/watch "src"
  {:main 'partial_app_payment.core
   :output-to "out/partial_app_payment.js"
   :output-dir "out"
   :optimizations :none
   :cache-analysis true
   :source-map true})
