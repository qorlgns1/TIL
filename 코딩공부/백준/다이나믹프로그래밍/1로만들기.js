let fs = require("fs");
let input = fs.readFileSync("../예제.txt").toString();
// let input = fs.readFileSync("/dev/stdin").toString();
const N = parseInt(input);

const dp = new Array(N + 1).fill(0);

// N === 1 이면 정답은 0이여서 i는 2부터 시작한다.
for (let i = 2; i < dp.length; i++) {
  dp[i] = dp[i - 1] + 1; // 1을 뺀 경우의 최솟값

  if (i % 3 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 3] + 1); // 3으로 나눴을 경우의 최솟값
  }

  if (i % 2 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 2] + 1); // 2로 나눴을 경우의 최솟값
  }
}

console.log(dp[N]);
