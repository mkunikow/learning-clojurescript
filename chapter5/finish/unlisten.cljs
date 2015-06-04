(defn unlisten!
  "Removes event listeners from each node in the content. If a listener type is supplied, removes only listeners of that type. If content is omitted, it will remove listeners from the document's root element."
  ([] (unlisten! root-element))
  ([content]
     (doseq [node (domina/nodes content)]
       (events/removeAll node)))
  ([content type]
     (let [type (name type)]
       (doseq [node (domina/nodes content)]
         (events/removeAll node type)))))

