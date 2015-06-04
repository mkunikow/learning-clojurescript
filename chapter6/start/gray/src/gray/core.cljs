(ns gray.core
  (:require [clojure.browser.repl :as repl]
            [reagent.core :as reagent :refer [atom]]))

(defonce conn
  (repl/connect "http://localhost:9000/repl"))

(enable-console-print!)

