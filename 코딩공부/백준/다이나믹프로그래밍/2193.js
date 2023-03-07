// 숫자가 커지면 BigInt를 사용해야한다.
// BigInt를 출력하면 뒤에 n이 붙게된다.
// Number를 사용해봤지만 실패했고, toString을 사용해서 통과했다.

let fs = require("fs");
let input = fs.readFileSync("../예제.txt").toString();
// let input = fs.readFileSync("/dev/stdin").toString();
const N = parseInt(input);

const dp = [0, 1];

for (let i = 2; i <= N; i++) {
  dp[i] = BigInt(dp[i - 1]) + BigInt(dp[i - 2]);
}

console.log(dp[N].toString());
