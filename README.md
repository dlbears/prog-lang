# Toy Language Project
## Interpreter built in Clojure
## Ways to run programs (easiest to hardest):

### Using a browser (Tested on Chromium/Safari): 
  - Try the [github page](https://dlbears.github.io/prog-lang/)
  - Download the repo locally and Open public/index.html in a web browser

### Using Native ARM Image (Tested on ARM64 Linux)
```
./toylang-aarch64 [source-file-path]
```
### Using Native x86 Image (Tested on x86_64 Linux)
```
./toylang-x86 [source-file-path]
```
### Using Java (Tested on JRE 11, Windows/Mac/Linux)
```
java -cp target/toylang-1.0.0-SNAPSHOT-standalone.jar server.app [source-file-path]
```
### Using Node (Tested on NodeJS 16 LTS, Windows/Mac/Linux)
```
node target/out/server.js [source-file-path]
```
### Using Clojure (Tested using clj 1.11, Windows/Mac/Linux)
```
clj -M -m server.app [source-file-path]
```

## Run Locally (Browser)
#### Dependencies:
  - npm & nodejs (LTS)
  - clj (1.11+)
#### Run:
```
npm install
npm start
```

## Build Locally (All Targets)
#### Dependencies: 
  - npm & nodejs (LTS) 
  - clj (1.11+) 
  - graalvm (jdk 11+) 
  - graalvm native-image
#### Run:
```
npm install
npm run build:all
```
