// https://www.acmicpc.net/problem/1541

let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
let n = fs.readFileSync(filePath).toString().trim();

const arr = n.split('-');

const numArr = arr[0].split('+').map(Number);
let answer = numArr.reduce((acc, cur) => acc + cur, 0);

for (let i = 1; i < arr.length; i++) {
  const numArr = arr[i].split('+').map(Number);
  const sum = numArr.reduce((acc, cur) => acc + cur, 0);

  answer -= sum;
}

console.log(answer);
