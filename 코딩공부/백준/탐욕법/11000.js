// https://www.acmicpc.net/problem/11000

// 헷갈렷던 이유
// 한번 사용한 강의실은 사용이 끝나고 없어지는게 아니라, 빈 강의실이 되어 앞으로 진행할 강의실로 사용하게 된다.
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
const [n, ...inputs] = fs.readFileSync(filePath).toString().trim().split('\n');

const times = inputs.map((input) => input.split(' ').map(Number));

let answer = 0;
let classroom = 0;
const obj = [];

for (let i = 0; i < n; i += 1) {
  obj.push({ time: times[i][0], start: 1 });
  obj.push({ time: times[i][1], start: -1 });
}

obj.sort((a, b) => (a.time === b.time ? a.start - b.start : a.time - b.time));

obj.forEach((schedule) => {
  if (schedule.start === -1) {
    classroom -= 1;
  } else if (schedule.start === 1) {
    classroom += 1;
  }

  answer = Math.max(classroom, answer);
});

console.log(answer);
