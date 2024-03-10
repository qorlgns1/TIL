// https://www.acmicpc.net/problem/1697

let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
let [N, K] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

const MAX_LEN = 100000;
const ch = new Array(MAX_LEN + 1).fill(0);
const queue = [[N, 0]];
let answer = 0;

while (queue.length) {
  const [x, cnt] = queue.shift();

  // 지나갔던 길이면 넘어감
  if (ch[x]) continue;

  if (x === K) {
    answer = cnt;
    break;
  } else {
    ch[x] = 1;

    if (x * 2 <= MAX_LEN && !ch[x * 2]) queue.push([x * 2, cnt + 1]);
    if (x + 1 <= MAX_LEN && !ch[x + 1]) queue.push([x + 1, cnt + 1]);
    if (x - 1 >= 0 && !ch[x - 1]) queue.push([x - 1, cnt + 1]);
  }
}

console.log(answer);
