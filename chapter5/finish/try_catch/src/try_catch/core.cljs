(ns try_catch.core
  (:require [clojure.browser.repl :as repl]))

(defonce conn
  (repl/connect "http://localhost:9000/repl"))

(enable-console-print!)

(try
  ;; undefined function
  ;; (blah)

  ;; bad index
  ;; (nth [1 2 3 4] -1)

  ;; syntax error
  ;; (.eval js/window "3 * * 4")

  ;; out of range error
  ;; (.toFixed 2.71828 1000)

  ;; URI error
  ;; (.decodeURI js/window "%blah%")

  (catch js/SyntaxError error
    (println "Your syntax is incorrect."))
  (catch js/RangeError error
    (println "You have a value out of range."))
  (catch js/URIError error
    (println "The URI is not valid."))
  (catch js/Error error
    (println "Oops." error))
  (finally
    (println "This shows up, error or not.")))

