// 값이 Number의 최대값을 초과한다.
// 실패
// let fs = require("fs");
// let input = fs.readFileSync("../예제.txt").toString();
// // let input = fs.readFileSync("/dev/stdin").toString();
// const N = parseInt(input);

// const dp = [
//   [0, 0],
//   [9, 1],
//   [17, 2],
// ];

// for (let i = 3; i <= N; i++) {
//   const [beforeTotal, zeroOrNine] = dp[i - 1];

//   dp.push([
//     (beforeTotal - zeroOrNine) * 2 + zeroOrNine,
//     dp[i - 1][1] + dp[i - 2][1],
//   ]);
// }

// console.log(dp[N][0]);

let fs = require("fs");
let input = fs.readFileSync("../예제.txt").toString();
// let input = fs.readFileSync("/dev/stdin").toString();
const N = parseInt(input);

const dp = [[]];
dp.push(new Array(10).fill(1));
dp[1][0] = 0;

for (let i = 2; i <= N; i++) {
  dp[i] = [];
  for (let j = 0; j < 10; j++) {
    if (j === 0) {
      dp[i][j] = dp[i - 1][1];
    } else if (j === 9) {
      dp[i][9] = dp[i - 1][8];
    } else {
      dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]) % 1000000000;
    }
  }
}

console.log(dp[N].reduce((acc, cur) => (acc + cur) % 1000000000, 0));
