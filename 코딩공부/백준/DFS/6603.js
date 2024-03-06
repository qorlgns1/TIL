// https://www.acmicpc.net/problem/6603
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
let arr = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((input) => input.split(' ').map(Number));

arr.pop();

const answer = [];

function dfs(cnt, ch, arr, idx) {
  if (cnt === 6) {
    answer.push(arr.filter((_, i) => ch[i]).join(' '));
  } else {
    for (let i = idx; i < ch.length; i++) {
      if (!ch[i]) {
        ch[i] = 1;
        dfs(cnt + 1, ch, arr, i + 1);
        ch[i] = 0;
      }
    }
  }
}

for (let i = 0; i < arr.length; i++) {
  const set = arr[i];
  const k = set.shift();
  const ch = new Array(k).fill(0);

  dfs(0, ch, set, 0);
  answer.push('');
}

answer.pop();

console.log(answer.join('\n'));
