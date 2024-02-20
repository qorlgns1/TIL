// https://www.acmicpc.net/problem/4796

let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
let inputs = fs.readFileSync(filePath).toString().trim().split('\n');
inputs.pop();

inputs = inputs.map((str) => str.split(' ').map(Number));

const answer = [];
for (let i = 0; i < inputs.length; i++) {
  let [L, P, V] = inputs[i];
  let useDay = Math.floor(V / P) * L;
  V = V % P;

  useDay += V <= L ? V : L;
  answer.push(`Case ${i + 1}: ${useDay}`);
}

console.log(answer.join('\n'));
