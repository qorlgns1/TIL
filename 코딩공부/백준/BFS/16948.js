// https://www.acmicpc.net/problem/16948

let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
let [[N], [r1, c1, r2, c2]] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

let answer = -1;
const moveArr = [
  [-2, -1],
  [-2, 1],
  [0, -2],
  [0, 2],
  [2, -1],
  [2, 1],
];
const checkArr = Array.from({ length: N }, () => new Array(N).fill(0));
checkArr[r1][c1] = 1;
const queue = [[r1, c1, 0]];

while (queue.length) {
  const [row, col, cnt] = queue.shift();

  if (row === r2 && col === c2) {
    answer = cnt;
    break;
  }

  moveArr.forEach(([nextRowMove, nextColMove]) => {
    const [nextRow, nextCol] = [row + nextRowMove, col + nextColMove];

    if (
      nextRow >= 0 &&
      nextCol >= 0 &&
      nextRow < N &&
      nextCol < N &&
      !checkArr[nextRow][nextCol]
    ) {
      checkArr[nextRow][nextCol] = 1;

      queue.push([nextRow, nextCol, cnt + 1]);
    }
  });
}

console.log(answer);
