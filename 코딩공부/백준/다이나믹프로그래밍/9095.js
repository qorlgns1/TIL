let fs = require("fs");
let [T, ...inputs] = fs
  .readFileSync("../예제.txt")
  // .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(`\n`);

let cases = inputs.map(Number);
const dpLenth = [...cases].sort((a, b) => a - b).at(-1) + 1;

const dp = new Array(dpLenth).fill(0);
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for (let i = 4; i < dp.length; i++) {
  dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
}

const answer = cases.map((n) => dp[n]).join("\n");
console.log(answer);
