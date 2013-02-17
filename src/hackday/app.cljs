(ns hackday.app
  (:require [cljs.nodejs :as node]))

(def numerals [1 3 9 25 17 11 27 19 10 26])

(def rows [0 4 36 32])

(defn latin->braile [latin]
  (let [ord (- (.charCodeAt (.toUpperCase latin) 0) 65)
        convert #(+ (numerals (mod % 10)) (rows (int (/ % 10))))]
    (cond
      (or (> ord 25) (neg? ord)) 0 
      (> ord 22) (convert (dec ord)) ;skip "w"
      (= ord 22) (convert 39)        ;"w" is fucked up
      :else (convert ord))))

(defn -main []
  (let [johnny-five (node/require "johnny-five")
        board (johnny-five/Board.)]
    (.on board "ready" 
         (fn []
           (let [shift-register (johnny-five/ShiftRegister. (clj->js {:pins {:data 2 :clock 3 :latch 4}}))
                 to-braile #(.send shift-register (latin->braile %))]
             (.inject (.-repl board) (clj->js 
                                       {:shiftRegister shift-register 
                                        :toBraile to-braile}))
             (doto (.-stdin node/process)
               (.setRawMode true)
               (.resume)
               (.setEncoding "utf8")
               (.on "data" (fn [k]
                             (if (= k "\u0003")
                               (.exit node/process)
                               (to-braile k))))))))))

(set! *main-cli-fn* -main)
