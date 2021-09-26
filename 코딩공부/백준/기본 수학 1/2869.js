let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../예제.txt";
let [A, B, V] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((v) => Number(v));

let result = A;
let move = A - B;
let height = V - result;
let day = Math.ceil(height / move);
console.log(day + 1);
