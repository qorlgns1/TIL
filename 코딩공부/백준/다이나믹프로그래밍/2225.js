let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../예제.txt";
let [N, K] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

// 0 ~ N 까지여서 0부터 시작하기 위해 + 1
const dp = [new Array(N + 1).fill(1)];
const MOD = 1000000000;

for (let i = 1; i < K; i++) {
  // 처음은 0 + 0 + 2 이런식으로 더할 수 있어서 경우의 수는 무조건 1가지
  const nArr = [1];
  for (let j = 1; j <= N; j++) {
    nArr.push((dp[i - 1][j] % MOD) + ((nArr.at(-1) % MOD) % MOD));
  }

  dp.push(nArr);
}

console.log(dp[K - 1][N] % MOD);
