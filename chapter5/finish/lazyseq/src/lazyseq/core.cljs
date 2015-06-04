(ns lazyseq.core
  (:require [clojure.browser.repl :as repl]
            [domina :as dom]
            [domina.events :as ev]))

(defonce conn
  (repl/connect "http://localhost:9000/repl"))

(defn square [x] (* x x))

(def the-list (dom/by-id "sampleList"))

(def animals ["ant" "bee" "cat" "dog" "elk"])

(defn list-item [text] (str "<li>" text "</li>"))

(dorun
    (map (fn [x] (dom/append! the-list (list-item x))) animals))
