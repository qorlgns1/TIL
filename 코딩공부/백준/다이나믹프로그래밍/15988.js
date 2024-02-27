let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
let [T, ...inputs] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const sumArr = [0, 1, 2, 4];

for (let i = 4; i <= Math.max(...inputs); i++) {
  sumArr.push((sumArr[i - 3] + sumArr[i - 2] + sumArr[i - 1]) % 1000000009);
}

let answer = [];
inputs.forEach((n) => {
  answer.push(sumArr[n]);
});

console.log(answer.join('\n'));
