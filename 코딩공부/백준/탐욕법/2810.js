// https://www.acmicpc.net/problem/2720

let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n')[1];

let cnt = 1; // 왼쪽
let coupleSeatCount = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] === 'S') {
    cnt++;
  } else {
    coupleSeatCount++;

    if (coupleSeatCount === 2) {
      cnt++;
      coupleSeatCount = 0;
    }
  }
}

console.log(input.length > cnt ? cnt : input.length);
