(ns basicstats.stats)

(defn mean [data]
  (let [n (count data)
        sum (reduce + data)]
    (if (zero? n)
      0
      (/ sum n))))

(defn median [data]
  (let [n (count data)]
    (if (zero? n)
      0
      (let [half (drop (- (int (/ n 2)) 1) (sort data))]
        (if (odd? n)
          (second half)
          (/ (+ (first half) (second half)) 2))))))

(defn standard-deviation [data]
  (let [n (count data)
        [sum sumsq] (reduce
                      (fn [acc x]
                        (list (+ (first acc) x) (+ (last acc) (* x x)))) '(0 0) data)]
    (if (zero? n)
      0
      (js/Math.sqrt (/ (- (* n sumsq) (* sum sum)) (* n (- n 1)))))))

(defn testor [x] 0)