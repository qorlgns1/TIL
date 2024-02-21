// https://www.acmicpc.net/problem/11047

let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
let [NK, ...inputs] = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, K] = NK.split(' ').map(Number);
inputs = inputs.map(Number).sort((a, b) => b - a);
let rest = K;

let answer = inputs.reduce((acc, cur) => {
  acc += Math.floor(rest / cur);
  rest %= cur;
  return acc;
}, 0);

console.log(answer);
