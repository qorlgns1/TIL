// https://www.acmicpc.net/problem/18352
// https://brick-parrot-a90.notion.site/872667e5598d49f7a2757f8004c25869

// 질문에 대한 멋진 답변 기록
// https://www.acmicpc.net/board/view/122676

let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
let [[N, _, K, X], ...arr] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

const graph = Array.from({ length: N + 1 }, () => []);

arr.forEach(([row, col]) => {
  graph[row].push(col);
});

const distances = new Array(N + 1).fill(-1);
distances[X] = 0;

const queue = [X];

while (queue.length) {
  const now = queue.shift();

  for (let next of graph[now]) {
    if (distances[next] === -1) {
      distances[next] = distances[now] + 1;
      if (distances[next] > K) continue;
      queue.push(next);
    }
  }
}

const answer = distances.reduce((acc, distance, i) => {
  if (distance === K) {
    acc.push(i);
  }
  return acc;
}, []);

console.log(answer.length ? answer.join('\n') : -1);
