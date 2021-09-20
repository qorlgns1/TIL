let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
let [A, B, C] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map((v) => {
    return Number(v);
  });

let v = Math.floor(A / (C - B)) + 1;

if (B >= C) {
  console.log(-1);
} else {
  console.log(v);
}
