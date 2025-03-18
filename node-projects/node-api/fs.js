let fs = require("fs");
fs.writeFileSync("index.js", "console.log('hello world')");
fs.unlinkSync("index.js");

let fs = require("fs");
let path = require("path");
let dirPath = path.join(__dirname, "crud");
fs.writeFileSync(`${dirPath}/index.html`, "hello world");

let fs = require("fs");
let path = require("path");
let dirPath = path.join(__dirname, "crud");
for (let i = 1; i <= 5; i++) {
  fs.writeFileSync(`${dirPath}/index${i}.html`, "hello world");
}

let fs = require("fs");
let input = process.argv;
if (input[2] === "add") {
  fs.writeFileSync(input[3], input[4]);
} else if (input[2] === "remove") {
  fs.unlinkSync(input[3]);
} else {
  console.log("invalid file");
