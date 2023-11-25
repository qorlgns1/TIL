// BFS 풀이
function solution(n, edge) {
  const graph = {};
  const queue = [1];
  const visited = new Set([1]);
  const distance = new Array(n + 1).fill(0);
  distance[1] = 1;

  for (let i = 0; i < n; i++) {
    graph[i + 1] = new Set();
  }

  edge.forEach(([from, to]) => {
    graph[from].add(to);
    graph[to].add(from);
  });

  while (queue.length) {
    const node = queue.shift();

    for (let v of graph[node]) {
      if (!visited.has(v)) {
        distance[v] = distance[node] + 1;
        visited.add(v);
        queue.push(v);
      }
    }
  }

  const maxDistance = Math.max(...distance);
  return distance.filter((v) => v === maxDistance).length;
}

// BFS 풀이
// 개선 버전
function solution(n, edge) {
  const graph = edge.reduce((acc, [from, to]) => {
    acc[from] = acc[from] ? acc[from].add(to) : new Set([to]);
    acc[to] = acc[to] ? acc[to].add(from) : new Set([from]);

    return acc;
  }, {});

  const queue = [1];
  const visited = new Set([1]);
  const distance = new Array(n + 1).fill(0);
  distance[1] = 1;

  while (queue.length) {
    const node = queue.shift();

    for (let v of graph[node]) {
      if (!visited.has(v)) {
        distance[v] = distance[node] + 1;
        visited.add(v);
        queue.push(v);
      }
    }
  }

  const maxDistance = Math.max(...distance);
  return distance.filter((v) => v === maxDistance).length;
}

const n = 6;
const vertex = [
  [3, 6],
  [4, 3],
  [3, 2],
  [1, 3],
  [1, 2],
  [2, 4],
  [5, 2],
];

console.log(solution(n, vertex));
