// https://www.acmicpc.net/problem/1309

let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
let n = Number(fs.readFileSync(filePath).toString().trim());

const MOD = 9901;

const dp = [1, 3];
for (let i = 2; i <= n; i++) {
  dp.push((dp[i - 1] * 2 + dp[i - 2]) % MOD);
}
console.log(dp[n]);
