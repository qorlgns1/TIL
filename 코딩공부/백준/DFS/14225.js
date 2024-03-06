// https://www.acmicpc.net/problem/14225

let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
let [[N], arr] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((input) => input.split(' ').map(Number));

const sumArr = new Set();
sumArr.add(0);

function dfs(level, sum) {
  if (level === N) return;

  for (let i = level; i < N; i++) {
    sumArr.add(sum + arr[i]);
    dfs(i + 1, sum + arr[i]);
  }
}

dfs(0, 0);

for (let i = 0; i <= sumArr.size + 1; i++) {
  if (!sumArr.has(i)) {
    console.log(i);
    break;
  }
}

// chatgpt가 제공해준 dp로 푼 정답
// let fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
// let [[N], arr] = fs
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split('\n')
//   .map((input) => input.split(' ').map(Number));

// const dp = new Array(2000001).fill(false);
// dp[0] = true;

// for (let i = 0; i < N; i++) {
//   for (let j = 2000000 - arr[i]; j >= 0; j--) {
//     if (dp[j]) {
//       dp[j + arr[i]] = true;
//     }
//   }
// }

// for (let i = 1; i < 2000001; i++) {
//   if (!dp[i]) {
//     console.log(i);
//     break;
//   }
// }

// 시간 초과 코드
// 시간 초과 이유: 82번째 줄에 level + 1 => i + 1로 수정 했어야 함
// let fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
// let [[N], arr] = fs
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split('\n')
//   .map((input) => input.split(' ').map(Number));

// const sumArr = new Set();
// const ch = new Array(N).fill(0);
// function dfs(level, sum) {
//   if (level === N) return;

//   for (let i = level; i < N; i++) {
//     if (!ch[i]) {
//       ch[i] = 1;

//       sumArr.add(sum + arr[i]);
//       dfs(level + 1, sum + arr[i]);
//       ch[i] = 0;
//     }
//   }
// }

// dfs(0, 0);

// for (let i = 0; i < sumArr.size + 1; i++) {
//   if (!sumArr.has(i + 1)) {
//     console.log(i + 1);
//     break;
//   }
// }

// 다른사람 정답 1
// let fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
// let [[N], arr] = fs
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split('\n')
//   .map((input) => input.split(' ').map(Number));

// let num = 1;
// arr.sort((a, b) => a - b);

// for (let idx in arr) {
//   if (num < arr[idx]) break;
//   num += arr[idx];
// }

// console.log(num);

// 다른사람 정답 2
// let fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
// let [[N], arr] = fs
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split('\n')
//   .map((input) => input.split(' ').map(Number));

// const table = {};

// function DFS(sum, cnt) {
//   if (cnt === N) return;

//   sum += arr[cnt];
//   table[sum] = true;
//   DFS(sum, cnt + 1);
//   DFS(sum - arr[cnt], cnt + 1);
// }

// DFS(0, 0);

// let idx = 1;
// while (true) {
//   if (!table[idx]) {
//     console.log(idx);
//     return;
//   }
//   idx++;
// }
