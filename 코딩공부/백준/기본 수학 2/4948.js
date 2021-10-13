let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
let B = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => {
    return (v = Number(v.trim()));
  })
  .filter((v) => {
    return v > 0;
  });

function solution(B) {
  const E = B * 2;
  if (B === 1) {
    console.log('1');
    return;
  } else {
    B = B + 1;
  }

  const isPrimeNum = Array(E + 1).fill(true);
  for (let n = 2; n <= Math.ceil(Math.sqrt(E)); n++) {
    isPrimeNum[1] = false;
    let m = 2;
    while (n * m <= E) {
      isPrimeNum[n * m] = false;
      m++;
    }
  }
  const answer = [];
  for (let n = B; n <= E; n++) {
    if (isPrimeNum[n]) {
      answer.push(n);
    }
  }
  console.log(answer.length.toString());
}

for (let i = 0; i < B.length; i++) {
  solution(B[i]);
}
