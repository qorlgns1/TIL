let fs = require('fs');
// let n = fs.readFileSync('/dev/stdin').toString();
let n = Number(fs.readFileSync('../예제.txt').toString());

for (let i = 0; i < n; i++) {
  let answer = '';
  for (let j = 0; j < n - i - 1; j++) {
    answer += ' ';
  }

  for (let j = 0; j < i + 1; j++) {
    answer += '* ';
  }

  console.log(answer);
}
