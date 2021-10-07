let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
let input = require('fs').readFileSync(filePath).toString().trim();
input = Number(input);

function solution(number) {
  if (number === 1) {
    return;
  }

  let LAST_EVEN = 2;
  while (number % LAST_EVEN === 0) {
    console.log(LAST_EVEN);
    number /= LAST_EVEN;
  }

  for (let odd = 3; odd <= number; odd = odd + 2) {
    while (number % odd === 0) {
      console.log(odd);
      number /= odd;
    }

    if (number === 1) {
      break;
    }
  }
}

solution(input);
