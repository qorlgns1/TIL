// https://www.acmicpc.net/problem/5585

let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
let T = 1000 - Number(fs.readFileSync(filePath).toString().trim());

const change = [500, 100, 50, 10, 5, 1];

let answer = [];

for (let j = 0; j < change.length; j++) {
  answer.push(Math.floor(T / change[j]));
  T = T % change[j];
}

console.log(answer.reduce((acc, cur) => acc + cur, 0));
