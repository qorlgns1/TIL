// https://www.acmicpc.net/problem/9095

// 내가 다시 푼 정답
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
const [S, P] = fs.readFileSync(filePath).toString().trim().split('\n');

let answer = 0;
let index = 0;
for (let i = 0; i < P.length; i++) {
  if (S.indexOf(P.slice(index, i + 1)) > -1) {
    continue;
  }

  index = i;
  answer++;
}

console.log(answer + 1);

// 다른사람 정답
// let fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
// const [S, P] = fs.readFileSync(filePath).toString().trim().split('\n');

// let index = 0;
// let cnt = 0;

// for (let i = 0; i < P.length; i++) {
//   if (S.indexOf(P.slice(index, i + 1)) !== -1) continue;
//   cnt++;
//   index = i;
// }

// console.log(cnt + 1);

// 내가 다시 푼 시간 초과 답
// let fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
// const [S, P] = fs.readFileSync(filePath).toString().trim().split('\n');

// let answer = 0;

// for (let i = 0; i < P.length; ) {
//   let cnt = 0;

//   for (let j = 0; j < S.length; j++) {
//     let tmp = 0;
//     while (P[i + tmp] === S[j + tmp]) {
//       tmp++;
//     }

//     if (cnt < tmp) {
//       cnt = tmp;
//     }
//   }

//   i += cnt;
//   answer++;
// }

// console.log(answer);

// 다른 사람 시간 초과 답
// let fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
// const [S, P] = fs.readFileSync(filePath).toString().trim().split('\n');

// let cnt = 0;
// let len1 = S.length;
// let len2 = P.length;

// for (let i = 0; i < len2; ) {
//   let max = 0;

//   for (let j = 0; j < len1; j++) {
//     let tmp = 0;
//     while (S[j + tmp] === P[i + tmp]) tmp++;
//     if (max < tmp) max = tmp;
//   }

//   i += max;
//   cnt++;
// }

// console.log(cnt);
