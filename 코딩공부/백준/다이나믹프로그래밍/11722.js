// https://www.acmicpc.net/problem/11722
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
  dp[i] = 1;
  let max = 0;
  for (let j = 0; j < i; j++) {
    if (arr[j] > arr[i] && dp[j] > max) {
      max = dp[j];
    }
  }

  dp[i] = max + 1;
}

console.log(Math.max(...dp));

// 주어진 예제와 질문게시판에 있는 모든예제는 통과했지만 답변제출시 실패한 코드
// 백준 질문 게시판에 질문을 남겨 놓음
// 예제 코드: https://www.acmicpc.net/board/view/137613#comment-209375
// let fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
// let [[N], arr] = fs
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split('\n')
//   .map((input) => input.split(' ').map(Number));

// arr = arr.reverse();

// const dp = [];
// let answer = 0;

// for (let i = 0; i < arr.length; i++) {
//   dp[i] = arr[i];
//   let cnt = 0;
//   for (let j = 0; j < i; j++) {
//     if (arr[i] > arr[j] && arr[i] + dp[j] > dp[i]) {
//       dp[i] = arr[i] + dp[j];
//       cnt++;
//     }
//   }

//   answer = Math.max(answer, cnt);
// }

// console.log(answer + 1);

// ------------------------------------------------------------------------------------------

// 주어진 예제와 질문게시판에 있는 모든예제는 통과했지만 답변제출시 실패한 코드
// 제출 방식만 변경
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.output,
// });

// let N = 0;
// rl.on('line', (line) => {
//   if (!N) {
//     N = Number(line);
//   } else {
//     main(line);
//     rl.close();
//   }
// }).on('close', () => {
//   process.exit();
// });

// /**
//  *
//  * @param {string} line
//  */

// const main = (line) => {
//   const arr = line.trim().split(' ').map(Number).reverse();

//   const dp = [];
//   let answer = 0;

//   for (let i = 0; i < N; i++) {
//     dp[i] = arr[i];
//     let cnt = 0;
//     for (let j = 0; j < i; j++) {
//       if (arr[i] > arr[j] && arr[i] + dp[j] > dp[i]) {
//         dp[i] = arr[i] + dp[j];
//         cnt++;
//       }
//     }

//     answer = Math.max(answer, cnt);
//   }

//   console.log(answer + 1);
// };
