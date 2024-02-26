// https://www.acmicpc.net/problem/14501
// 실패한 풀이
// let fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
// let [N, ...inputs] = fs.readFileSync(filePath).toString().trim().split('\n');

// const answer = new Array(Number(N) + 1).fill(0);
// const schedules = [[0, 0]];

// inputs.forEach((input) => {
//   const [ti, pi] = input.split(' ').map(Number);
//   schedules.push([ti, pi]);
// });

// for (let i = 1; i <= N; i++) {
//   for (let j = 1; j < schedules.length; j++) {
//     const [ti, pi] = schedules[j];
//     if (ti === i && ti + j <= N + 1) {
//       const sum = answer.slice(j, j + ti).reduce((acc, cur) => acc + cur, 0);

//       if (pi > sum) {
//         answer[j] = Math.max(pi, sum);

//         let day = 1;
//         while (day < ti) {
//           answer[j + day++] = 0;
//         }
//       }
//     }
//   }
// }

console.log(answer.reduce((acc, cur) => acc + cur, 0));

let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
let [n, ...arr] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map((v) => +v)); //.map((v) => Number(v);

n = n[0];
const dp = new Array(n).fill(0);

for (let i = 0; i < n; i++) {
  // 0일~6일
  const [duration, profit] = arr[i];
  if (i + duration > n) continue; // 현재 날짜 + 기간이 n이 넘으면 상담 불가
  dp[i] += profit;
  // console.log(dp);
  for (let j = i + duration; j < n; j++) {
    // console.log(dp[j], dp[i]);
    dp[j] = Math.max(dp[j], dp[i]); // 현재 금액, i일 뒤에 받게 될 금액 비교
  }
}
console.log(Math.max(...dp));
