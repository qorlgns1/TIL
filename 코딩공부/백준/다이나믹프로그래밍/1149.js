// https://www.acmicpc.net/problem/1149

let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
let [[N], ...arr] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((input) => input.split(' ').map(Number));

for (let i = 1; i < N; i++) {
  arr[i][0] += Math.min(arr[i - 1][1], arr[i - 1][2]);
  arr[i][1] += Math.min(arr[i - 1][0], arr[i - 1][2]);
  arr[i][2] += Math.min(arr[i - 1][0], arr[i - 1][1]);
}

console.log(Math.min(...arr[N - 1]));
