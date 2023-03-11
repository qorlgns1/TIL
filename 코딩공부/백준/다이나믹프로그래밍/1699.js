let fs = require("fs");
let input = fs.readFileSync("../예제.txt").toString();
// let input = fs.readFileSync("/dev/stdin").toString();
const N = parseInt(input);

const dp = [0, 1];
for (let i = 2; i <= N; i++) {
  let minCount = Number.MAX_SAFE_INTEGER;
  for (let j = Math.floor(Math.sqrt(i)); j >= 1; j--) {
    minCount = Math.min(minCount, 1 + dp[i - Math.pow(j, 2)]);
  }

  dp.push(minCount);
}

console.log(dp[N]);
