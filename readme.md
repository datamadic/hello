teaching xyz how to code... 
```clj
(def howsum? ;; the real one!
  (memoize
   (fn [n nums & [edge]]
     (cond
       (= 0 n) [[edge]] ;; think about the data shapes first, its always a list of lists!!
       (neg? n) [[false]]
       :else  (distinct (map
                #(sort (concat (if edge [edge] []) %1))
                (filter #(not-any? false? %1)
                        (apply concat (map #(howsum? (- n %) nums %)
                                           nums)))))))))
```
