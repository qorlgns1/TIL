let fs = require("fs");
let [n, input] = fs.readFileSync("../예제.txt").toString().trim().split("\n");
// let [n, input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const arr = input.split(" ").map(Number);

const dp = [arr[0]];

for (let i = 1; i < arr.length; i++) {
  const num = arr[i];
  const beforeSum = dp[i - 1] + num;

  num > beforeSum ? dp.push(num) : dp.push(beforeSum);
}

console.log(Math.max(...dp));
