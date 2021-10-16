let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../예제.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((v) => Number(v));

let range = [input[0], input[1], input[2] - input[0], input[3] - input[1]];

console.log(Math.min(...range));
