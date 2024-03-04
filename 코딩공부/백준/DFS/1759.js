// https://www.acmicpc.net/problem/1759
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
let [[L, C], [...arr]] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((input) => input.split(' '));

arr.sort();

const answer = [];
const ch = new Array(Number(C)).fill(0);

function DFS(str, ch, nextIndex) {
  if (str.length === Number(L)) {
    const 자음 = [];
    const 모음 = [];
    [...str].forEach((s) =>
      ['a', 'e', 'i', 'o', 'u'].includes(s) ? 모음.push(s) : 자음.push(s)
    );

    if (모음.length >= 1 && 자음.length >= 2) {
      answer.push(str);
    }
  } else {
    for (let i = nextIndex; i < arr.length; i++) {
      if (!ch[i]) {
        ch[i] = 1;
        DFS(str + arr[i], ch, i + 1);
        ch[i] = 0;
      }
    }
  }
}

DFS('', ch, 0);

console.log(answer.join('\n'));
