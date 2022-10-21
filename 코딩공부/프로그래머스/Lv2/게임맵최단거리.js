function solution(maps) {
  let answer = Number.MAX_SAFE_INTEGER;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  function DFS(x, y, sum) {
    if (x === maps.length - 1 && y === maps[0].length - 1) {
      answer = Math.min(answer, sum);
    } else {
      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (
          nx >= 0 &&
          ny >= 0 &&
          nx <= maps.length - 1 &&
          ny <= maps[0].length - 1 &&
          maps[nx][ny] === 1
        ) {
          maps[nx][ny] = 0;
          DFS(nx, ny, sum + 1);
          maps[nx][ny] = 1;
        }
      }
    }
  }

  maps[0][0] = 0;
  DFS(0, 0, 1);

  return answer < Number.MAX_SAFE_INTEGER ? answer : -1;
}

// console.log(
//   solution([
//     [1, 0, 1, 1, 1],
//     [1, 0, 1, 0, 1],
//     [1, 0, 1, 1, 1],
//     [1, 1, 1, 0, 1],
//     [0, 0, 0, 0, 1],
//   ])
// );

console.log(
  solution([
    [1, 0, 1, 1, 1, 1],
    [1, 0, 1, 0, 1, 1],
    [1, 0, 1, 1, 1, 1],
    [1, 1, 1, 0, 0, 1],
    [0, 0, 0, 0, 1, 1],
  ])
);
