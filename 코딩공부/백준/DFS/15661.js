// https://www.acmicpc.net/problem/15661
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
let [[N], ...arr] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((input) => input.split(' ').map(Number));

let answer = Number.MAX_SAFE_INTEGER;
const ch = new Array(Number(N)).fill(0);

function DFS(cnt, index) {
  if (cnt < N) {
    const team1 = [];
    const team2 = [];

    ch.forEach((c, i) => {
      c === 1 ? team1.push(i) : team2.push(i);
    });

    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < team1.length; i++) {
      for (let j = i + 1; j < team1.length; j++) {
        sum1 = sum1 + arr[team1[i]][team1[j]] + arr[team1[j]][team1[i]];
      }
    }

    for (let i = 0; i < team2.length; i++) {
      for (let j = i + 1; j < team2.length; j++) {
        sum2 = sum2 + arr[team2[i]][team2[j]] + arr[team2[j]][team2[i]];
      }
    }

    answer = Math.min(answer, Math.abs(sum2 - sum1));
  }

  for (let i = index; i < arr.length; i++) {
    if (!ch[i]) {
      ch[i] = 1;
      DFS(cnt + 1, i + 1);
      ch[i] = 0;
    }
  }
}

DFS(0, 0);

console.log(answer);
