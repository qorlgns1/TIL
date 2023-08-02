function solution(maps) {
  let answer = 1;

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const queue = [];

  maps[0][0] = 0;
  queue.push([0, 0]);

  while (queue.length > 0) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const [x, y] = queue.shift();

      for (let j = 0; j < 4; j++) {
        const nx = x + dx[j];
        const ny = y + dy[j];

        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < maps.length &&
          ny < maps[0].length &&
          maps[nx][ny] === 1
        ) {
          if (nx === maps.length - 1 && ny === maps[0].length - 1) {
            return answer + 1;
          }

          maps[nx][ny] = 0;
          queue.push([nx, ny]);
        }
      }
    }
    answer++;
  }

  return -1;
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);
