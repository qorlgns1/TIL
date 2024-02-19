// https://www.acmicpc.net/problem/10162

let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
const T = Number(fs.readFileSync(filePath).toString().trim());

// 5분, 1분, 10초
const buttons = [300, 60, 10];
let remain = T;

const answer = buttons.reduce((acc, time) => {
  acc.push(Math.floor(remain / time));
  remain %= time;

  return acc;
}, []);

console.log(remain ? -1 : answer.join(' '));
