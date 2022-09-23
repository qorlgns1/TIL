function solution(n, arr) {
  let answer = 0;
  const graph = Array.from(Array(n + 1), () => new Array(n + 1).fill(0));
  const ch = new Array(n + 1).fill(0);

  arr.forEach((_, i) => {
    const [row, column] = arr[i];
    graph[row][column] = 1;
  });

  function DFS(v) {
    if (v === n) {
      answer++;
    } else {
      for (let i = 1; i <= n; i++) {
        if (graph[v][i] === 1 && ch[i] === 0) {
          ch[i] = 1;
          DFS(i);
          ch[i] = 0;
        }
      }
    }
  }

  ch[1] = 1;
  DFS(1);

  return answer;
}

console.log(
  solution(5, [
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 1],
    [2, 3],
    [2, 5],
    [3, 4],
    [4, 2],
    [4, 5],
  ])
);
