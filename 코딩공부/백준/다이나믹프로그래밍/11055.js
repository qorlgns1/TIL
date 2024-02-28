// https://www.acmicpc.net/problem/11055
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
let [[N], arr] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((input) => input.split(' ').map(Number));

const dp = [];

for (let i = 0; i < N; i++) {
  dp[i] = arr[i];
  for (let j = 0; j < i; j++) {
    if (arr[i] > arr[j] && arr[i] + dp[j] > dp[i]) {
      dp[i] = arr[i] + dp[j];
    }
  }
}

console.log(Math.max(...dp));

// 메모리 초과
// let fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
// let [[N], arr] = fs
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split('\n')
//   .map((input) => input.split(' ').map(Number));

// const dp = [[0], [arr[0], 0]];

// for (let i = 1; i < N; i++) {
//   const temp = [];
//   for (let j = 0; j < dp.at(-1).length; j++) {
//     if (arr[i] > dp.at(-1)[j]) {
//       temp.push(arr[i] + dp.at(-1)[j]);
//     } else {
//       temp.push(dp.at(-1)[j]);
//     }

//     temp.push(dp.at(-1)[j]);
//   }

//   dp.push(temp);
// }

// console.log(Math.max(...dp.at(-1)));
