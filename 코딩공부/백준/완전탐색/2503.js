// https://www.acmicpc.net/problem/9095

let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
const [N, ...inputs] = fs.readFileSync(filePath).toString().trim().split('\n');

let cases = [];

for (let i = 123; i <= 987; i++) {
  const arr = `${i}`.split('').map(Number);

  if (arr.includes(0)) {
    continue;
  }

  if (arr[0] !== arr[1] && arr[1] !== arr[2] && arr[2] !== arr[0]) {
    cases.push(i);
  }
}

const answer = [];
for (let i = 0; i < cases.length; i++) {
  const compareArr = `${cases[i]}`.split('');
  let is = true;

  for (let j = 0; j < inputs.length; j++) {
    const [number, strike, ball] = inputs[j].split(' ').map(Number);
    const numberArr = `${number}`.split('');

    let strikeCount = 0;
    let ballCount = 0;

    for (let k = 0; k < 3; k++) {
      if (numberArr[k] === compareArr[k]) {
        strikeCount++;
      }

      if (numberArr[k] !== compareArr[k] && numberArr.includes(compareArr[k])) {
        ballCount++;
      }
    }

    if (strike !== strikeCount || ball !== ballCount) {
      is = false;
      break;
    }
  }

  if (is) answer.push(cases[i]);
}

console.log(answer.length);
