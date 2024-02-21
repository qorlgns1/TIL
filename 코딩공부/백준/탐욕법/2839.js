// https://www.acmicpc.net/problem/2839

let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
const n = fs.readFileSync(filePath).toString().trim();

const BAG = [3, 5];
let answer = Math.floor(n / BAG[1]);
let rest = n % BAG[1];
let isFind = true;

while (rest) {
  if (rest % BAG[0] === 0) {
    answer += rest / BAG[0];
    rest = 0;
  } else {
    if (rest >= n) {
      isFind = false;
      break;
    } else {
      rest += BAG[1];
      answer--;
    }
  }
}

console.log(isFind ? answer : -1);
