let fs = require('fs');
// let n = fs.readFileSync('/dev/stdin').toString();
let n = fs.readFileSync('../예제.txt').toString();

let answer = '';

for (let i = 0; i < n - 1; i++) {
  for (let j = 0; j < n - i - 1; j++) {
    answer += ' ';
  }

  answer += '*';

  for (let j = 0; j < i * 2 - 1; j++) {
    answer += ' ';
  }

  if (i) {
    answer += '*';
  }

  answer += '\n';
}

let i = 0;
while (i < 2 * n - 1) {
  answer += '*';
  i++;
}

console.log(answer);
