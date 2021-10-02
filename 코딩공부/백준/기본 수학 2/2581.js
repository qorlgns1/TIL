let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
let [A, B] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => Number(v));
let sosuArray = [];
let len = B - A + 1;

for (let i = 0; i < len; i++) {
  const value = A + i;
  if (value === 1) {
    continue;
  } else if (value < 4) {
    sosuArray.push(value);
    continue;
  }
  let j;
  for (j = 2; j < value; j++) {
    if (value % j === 0) {
      break;
    }
  }

  if (j - 1 === value - 1) {
    sosuArray.push(value);
  }
}

if (sosuArray.length === 0) {
  console.log(-1);
} else {
  let sum = sosuArray.reduce((p, v) => {
    return p + v;
  }, 0);
  console.log(sum);
  console.log(sosuArray[0]);
}
