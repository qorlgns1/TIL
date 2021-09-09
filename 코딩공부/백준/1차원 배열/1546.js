let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../예제.txt";
let [len, input] = require("fs").readFileSync(filePath).toString().split("\n");
let array = input.split(" ").map((e) => {
  return Number(e);
});

let maxPoint = Math.max(...array);
let resultArray = array.map((e) => {
  return (e / maxPoint) * 100;
});

let avg = resultArray.reduce((p, c, i) => {
  return (p = p + c);
});

console.log(avg / len);
