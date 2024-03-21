// https://www.acmicpc.net/problem/1654

// 시간 초과
// let fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
// let [KN, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');

// const [K, N] = KN.split(' ').map(Number);

// let answer = 0;
// const 주어진_랜선 = arr.map(Number);
// const 주어진_랜선_합 = 주어진_랜선.reduce((acc, cur) => acc + cur, 0);

// let 만들수있는_최대길이 = Math.floor(주어진_랜선_합 / N);

// while (만들수있는_최대길이 > 1) {
//   const 만든_전선_개수 = 주어진_랜선.reduce((acc, cur) => {
//     return acc + Math.floor(cur / 만들수있는_최대길이);
//   }, 0);

//   if (만든_전선_개수 >= N) {
//     answer = 만들수있는_최대길이;
//     break;
//   }

//   만들수있는_최대길이--;
// }

// console.log(answer);

// 다른사람 정답
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [n, k] = input
  .shift()
  .split(' ')
  .map((a) => +a);
const lines = input.map((a) => +a).sort();
let max = Math.max(...lines);
let min = 1;

while (min <= max) {
  let mid = parseInt((max + min) / 2);
  let howManyPieces = lines
    .map((line) => parseInt(line / mid))
    .reduce((a, b) => a + b, 0);
  if (howManyPieces >= k) {
    min = mid + 1;
  } else {
    max = mid - 1;
  }
}
console.log(max);
