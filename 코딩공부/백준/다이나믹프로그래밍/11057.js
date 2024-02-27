// https://www.acmicpc.net/problem/11057

let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
let n = Number(fs.readFileSync(filePath).toString().trim());

const MOD = 10007;

const dp = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
];

for (let i = 3; i <= n; i++) {
  const temp = [1]; // 9로 시작하는 숫자의 개수
  for (let j = 1; j <= 9; j++) {
    temp.push((dp[i - 1][j] + temp[j - 1]) % MOD);
  }

  dp.push(temp);
}

const answer = dp[n].reduce((acc, cur) => acc + cur, 0) % MOD;
console.log(answer);
