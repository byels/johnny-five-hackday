(defproject gcljs "0.1.0-SNAPSHOT"
  :description "Arduino/Johnny-Five hackday project"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :min-lein-version "2.0.0"
  :plugins [[lein-cljsbuild "0.3.0"]]
  :cljsbuild {:builds
              [{:builds nil,
                :source-paths ["src/hackday"],
                :compiler
                {:pretty-print true,
                 :output-dir "build",
                 :output-to "build/main.js",
                 :optimizations :simple
                 :target :nodejs}}]}
  :dependencies [[org.clojure/clojure "1.4.0"]])
