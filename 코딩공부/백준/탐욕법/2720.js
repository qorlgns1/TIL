// https://www.acmicpc.net/problem/2720

let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
const [T, ...inputs] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const answer = [];
// 달러를 센트로 변경
const change = [0.25, 0.1, 0.05, 0.01].map((v) => v * 100);

for (let i = 0; i < inputs.length; i++) {
  let money = inputs[i];
  let tmp = [];

  for (let j = 0; j < change.length; j++) {
    tmp.push(Math.floor(money / change[j]));
    money = money % change[j];
  }

  answer.push(tmp.join(' '));
}

console.log(answer.join('\n'));
