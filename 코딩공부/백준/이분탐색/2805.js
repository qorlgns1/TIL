// https://www.acmicpc.net/problem/2805
// https://brick-parrot-a90.notion.site/1494763ed41540b18edf088088b6e5bd?pvs=4

let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
let [[N, M], arr] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

let min = 1;
let max = Math.max(...arr);

while (min <= max) {
  const mid = Math.floor((min + max) / 2);

  const getTreeLen = arr.reduce((sum, treeHeight) => {
    if (treeHeight > mid) {
      return sum + (treeHeight - mid);
    }
    return sum;
  }, 0);

  if (getTreeLen >= M) {
    min = mid + 1;
  } else {
    max = mid - 1;
  }
}

console.log(min - 1);
