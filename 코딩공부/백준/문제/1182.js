let fs = require('fs');
let [firstLine, secontLine] = fs
  .readFileSync('../예제.txt')
  .toString()
  .split('\n');

// let [firstLine, secontLine] = fs
//   .readFileSync('/dev/stdin')
//   .toString()
//   .split('\n');

const [N, S] = firstLine.split(' ').map((v) => +v);
const arr = secontLine.split(' ').map((v) => +v);

let answer = 0;
const ch = new Array(N).fill(0);

function DFS(i) {
  if (i >= arr.length) {
    let sum = 0;
    // console.log(ch);

    ch.forEach((v, i) => {
      if (ch[i] > 0) {
        sum += arr[i];
      }
    });

    if (sum === S && Math.max(...ch) !== 0) {
      answer++;
    }
  } else {
    ch[i] = 1;
    DFS(i + 1);
    ch[i] = 0;
    DFS(i + 1);
  }
}

DFS(0);
console.log(answer);
