// https://www.acmicpc.net/problem/2156

let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
let [n, ...inputs] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const dp = [0, inputs[0], inputs[0] + (inputs[1] ?? 0)];

for (let i = 3; i <= n; i++) {
  dp.push(
    Math.max(
      dp[i - 3] + inputs[i - 2] + inputs[i - 1],
      dp[i - 2] + inputs[i - 1],
      dp[i - 1]
    )
  );
}

const answer = dp[n];
console.log(answer);
