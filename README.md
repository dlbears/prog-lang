Toy language 

Ways to run programs (easiest to hardest):

Using a browser: 
    - try the github page
    - open public/index.html in a web browser

Using Native ARM Image (tested on M1 Mac)
./toylangarm [source-file-path]

Using Native x86 Image (tested on AMD Ryzen)
./toylangx86 [source-file-path]

Using Java (Requires JRE, tested on 11)
java -cp target/toylang-1.0.0-SNAPSHOT-standalone.jar server.app [source-file-path]

Using Node (Requires NodeJS LTS, tested on 16)
node target/out/server.js [source-file-path]

Using Clojure (Requires clj and its dependents, tested on 1.11)
clj -M -m server.app [source-file-path]


Build Locally (All Targets)
    - Dependencies: 
        - npm 
        - nodejs (LTS) 
        - clj (1.11+) 
        - graalvm (jdk 11+) 
        - graalvm native-image 
    - Run:
        - npm run build:all