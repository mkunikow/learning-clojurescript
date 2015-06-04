(ns try_catch.core
  (:require [clojure.browser.repl :as repl]))

(defonce conn
  (repl/connect "http://localhost:9000/repl"))

(enable-console-print!)

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
