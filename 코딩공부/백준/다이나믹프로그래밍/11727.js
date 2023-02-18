let fs = require("fs");
let input = fs.readFileSync("../예제.txt").toString();
// let input = fs.readFileSync("/dev/stdin").toString();
const n = parseInt(input);

const dp = new Array(n + 1).fill(0);
dp[1] = 1;
dp[2] = 3;

for (let i = 3; i < dp.length; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2] * 2) % 10007;
}

console.log(dp[n]);
