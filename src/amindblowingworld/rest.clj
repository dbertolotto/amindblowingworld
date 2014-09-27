(ns amindblowingworld.rest
  (:require [amindblowingworld.world :refer :all]
            [amindblowingworld.history :refer :all]
            [amindblowingworld.civs :refer :all]
            [clojure.data.json :as json]))

(defn total-pop-request []
  (json/write-str (total-pop)))

(defn- tribe-info [tribe]
  {:id (:id tribe) :name (.name tribe) :settlements (:settlements tribe)})

(defn- settlement-info [s]
  {:id (:id s) :name (.name s) :pos (:pos s) :tribe (:owner s)})

(defn tribes-request []
  (json/write-str (map tribe-info (vals (:tribes @game)))))

(defn settlements-request []
  (json/write-str (map settlement-info (vals (:settlements @game)))))