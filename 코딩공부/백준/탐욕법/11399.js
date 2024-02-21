// https://www.acmicpc.net/problem/11399

let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
let [N, inputs] = fs.readFileSync(filePath).toString().trim().split('\n');

inputs = inputs
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

const sumArr = [];
for (let i = 0; i < inputs.length; i++) {
  sumArr.push(inputs[i] + (sumArr[i - 1] ?? 0));
}

const answer = sumArr.reduce((a, c) => a + c, 0);
console.log(answer);
