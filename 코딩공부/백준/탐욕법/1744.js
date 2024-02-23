// https://www.acmicpc.net/problem/1744

let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
const [N, ...inputs] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

let answer = inputs.filter((input) => input === 1).length;
const positiveInteger = inputs.filter((input) => input > 1);
const lessThenOne = inputs.filter((input) => input <= 0);
positiveInteger.sort((a, b) => b - a);
lessThenOne.sort((a, b) => a - b);

for (let i = 0; i < Math.floor(positiveInteger.length / 2); i++) {
  answer += positiveInteger[i * 2] * positiveInteger[i * 2 + 1];
}

// 홀수이면
if (positiveInteger.length % 2 === 1) {
  answer += positiveInteger.at(-1);
}

for (let i = 0; i < Math.floor(lessThenOne.length / 2); i++) {
  answer += lessThenOne[i * 2] * lessThenOne[i * 2 + 1];
}

if (lessThenOne.length % 2 === 1) {
  answer += lessThenOne.at(-1);
}

console.log(answer);
