// https://www.acmicpc.net/problem/9095

let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
const [T, ...inputs] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

// n = 1인 경우 [1]
// n = 2인 경우 [1+1, 2]
// n = 3인 경우 [1+1+1, 2+1, 1+2, 3]
const sumArr = [0, 1, 2, 4];

for (let i = 4; i <= Math.max(...inputs); i++) {
  sumArr.push(sumArr[i - 3] + sumArr[i - 2] + sumArr[i - 1]);
}

let answer = [];
inputs.forEach((n) => {
  answer.push(sumArr[n]);
});

console.log(answer.join('\n'));
