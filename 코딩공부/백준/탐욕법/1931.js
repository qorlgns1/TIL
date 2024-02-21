// https://www.acmicpc.net/problem/1931

let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
let [N, ...inputs] = fs.readFileSync(filePath).toString().trim().split('\n');

const times = inputs.map((input) => input.split(' ').map(Number));
times.sort((a, b) => {
  if (a[1] !== b[1]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
});

let endTime = times[0][1];
let answer = 1;

for (let i = 1; i < times.length; i++) {
  const [start, end] = times[i];

  if (endTime <= start) {
    answer++;
    endTime = end;
  }
}

console.log(answer);
