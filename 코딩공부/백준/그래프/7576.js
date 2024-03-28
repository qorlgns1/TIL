// https://www.acmicpc.net/problem/7576

// 미해결....
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
let [[M, N], ...arr] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

const graph = Array.from({ length: N }, () => new Array(M).fill(0));

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    graph[i][j] = arr[i][j];
  }
}

const move = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

console.log(graph);
