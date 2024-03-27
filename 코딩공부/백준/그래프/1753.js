// https://www.acmicpc.net/problem/1753
// https://www.notion.so/41521c10fa34443cb3332190e498d52f

// 다른사람이 작성한 코드
class MinHeap {
  // schema {n, w }
  constructor() {
    this.heap = [null];
  }
  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  push(value) {
    this.heap.push(value);
    let currentIdx = this.heap.length - 1;
    let parentIdx = Math.floor(currentIdx / 2);
    while (parentIdx !== 0 && this.heap[parentIdx].w > value.w) {
      this.swap(currentIdx, parentIdx);
      currentIdx = parentIdx;
      parentIdx = Math.floor(currentIdx / 2);
    }
  }

  pop() {
    if (this.heap.length === 1) return null;
    if (this.heap.length === 2) return this.heap.pop();

    const returnValue = { ...this.heap[1] };
    this.heap[1] = this.heap.pop();

    let current = 1;
    let left = 2;
    let right = 3;

    while (
      (this.heap[left] && this.heap[current].w > this.heap[left].w) ||
      (this.heap[right] && this.heap[current].w > this.heap[right].w)
    ) {
      if (
        this.heap[right] === undefined ||
        this.heap[left].w < this.heap[right].w
      ) {
        this.swap(current, left);
        current = left;
      } else {
        this.swap(current, right);
        current = right;
      }
      left = current * 2;
      right = left + 1;
    }
    return returnValue;
  }
  isEmpty() {
    return this.heap.length === 1;
  }
}
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
const [N, S, ...L] = fs.readFileSync(filePath).toString().trim().split('\n');
const [v, e] = N.split(' ').map(Number);
const s = Number(S);
const list = L.map((i) => i.split(' ').map(Number));
const dist = Array.from({ length: v + 1 }, () => Infinity);
dist[0] = 0;
dist[s] = 0;
const graph = Array.from({ length: v + 1 }, () => []);

for (let [u, v, w] of list) {
  graph[u].push([v, w]); // to, cost
}
const heap = new MinHeap();
heap.push({ n: s, w: 0 });

while (!heap.isEmpty()) {
  const a = heap.pop();
  if (dist[a.n] < a.w) continue;
  for (let [nextN, nextNodeW] of graph[a.n]) {
    const nextWeight = dist[a.n] + nextNodeW;
    if (dist[nextN] <= nextWeight) continue;
    dist[nextN] = nextWeight;
    heap.push({ n: nextN, w: nextWeight });
  }
}
let answer = '';
for (let i = 1; i < dist.length; i++) {
  answer += dist[i] === Infinity ? 'INF\n' : dist[i] + '\n';
}
console.log(answer);

// ------------------------------------------------------------------------

// 1시간동안 풀다가 결국 해결하지 못한 코드
// let fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
// let [[V, E], [K], ...arr] = fs
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split('\n')
//   .map((v) => v.split(' ').map(Number));

// const graph = Array.from({ length: V + 1 }, () =>
//   new Array(V + 1).fill(Infinity)
// );
// const ch = new Array(V + 1).fill(0);

// // 각 간선을 나타내는 세 개의 정수 (u, v, w)가 순서대로 주어진다. 이는 u에서 v로 가는 가중치 w인 간선이 존재한다는 뜻
// arr.forEach(([u, v, w]) => {
//   graph[u][v] = w;
// });

// // [nextIndex, 가중치]
// const queue = [[K, 0]];

// while (queue.length) {
//   const [nextIndex, 가중치] = queue.shift();

//   if (ch[nextIndex]) continue;

//   ch[nextIndex] = 1;

//   graph[nextIndex].forEach((v, i) => {
//     if (!ch[i] && !!v) {
//       queue.push([i, 가중치 + v]);
//     }
//   });
// }

// console.log(graph);
