let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
let [A, B] = require('fs').readFileSync(filePath).toString().trim().split('\n');

let cnt = 0;
B = B.trim()
  .split(' ')
  .map((v) => Number(v))
  .filter((v) => {
    if (v === 1) {
      return false;
    } else if (v < 4) {
      cnt++;
    } else {
      return true;
    }
  });

function findSosu(num) {
  const len = Math.ceil(Math.sqrt(num));

  for (let i = 2; i <= len; i++) {
    if (num % i === 0) {
      return;
    }
  }

  cnt++;
  return;
}

for (let i = 0; i < B.length; i++) {
  findSosu(B[i]);
}

console.log(cnt);
