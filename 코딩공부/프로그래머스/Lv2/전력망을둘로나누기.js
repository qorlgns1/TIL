function solution(n, wires) {
  var answer = Number.MAX_SAFE_INTEGER;

  // 1. 전선들이 연결된 정보를 담는다.
  const adjList = {};
  for (let i = 1; i <= n; i++) {
    adjList[i] = new Set();
  }

  for (let i = 0; i < wires.length; i++) {
    const [from, to] = wires[i];
    adjList[from].add(to);
    adjList[to].add(from);
  }

  function dfs(node, visited) {
    // 3. 각 노드를 탐색하여 연결된 정보를 찾는다.
    visited.push(node);

    for (const nextNode of adjList[node]) {
      if (!visited.includes(nextNode)) {
        dfs(nextNode, visited);
      }
    }

    return visited;
  }

  for (let i = 0; i < wires.length; i++) {
    const [from, to] = wires[i];

    // 2. wires 배열의 wires의 인덱스 기준으로 간선을 끊는다.
    adjList[from].delete(to);
    adjList[to].delete(from);

    const visited = [];
    // 4. 연결된 노드의 정보를 받는다.
    const result = dfs(1, visited);

    // 5. [연결된 노드의 수, 또 다른 연결된 노드 수 (전체 노드 - 연결된 노드의 수)]
    // 기존에 모든 노드는 연결되어있고, 2번에서 간선을 끊으면 무조건 2개의 연결된 노드로 나온다.
    const nodeLen = [result.length, n - result.length];

    // 6. 두 연결된 노드의 차이중 작은값을 갱신한다.
    const subtract = Math.max(...nodeLen) - Math.min(...nodeLen);
    answer = Math.min(answer, subtract);

    // 7. 끊어진 노드를 다시 연결한다.
    adjList[from].add(to);
    adjList[to].add(from);
  }

  return answer;
}

console.log(
  solution(9, [
    [1, 3],
    [2, 3],
    [3, 4],
    [4, 5],
    [4, 6],
    [4, 7],
    [7, 8],
    [7, 9],
  ])
);
