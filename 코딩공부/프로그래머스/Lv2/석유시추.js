function solution(land) {
  const ch = Array.from({ length: land.length }, () => {
    return Array.from({ length: land[0].length }, () => false);
  });

  const oilInGroup = Array.from({ length: land[0].length }, () => 0);

  // 상하좌우
  const move = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  for (let i = 0; i < land.length; i++) {
    for (let j = 0; j < land[0].length; j++) {
      const hasOil = land[i][j];
      const isVisit = ch[i][j];

      if (!hasOil || isVisit) {
        ch[i][j] = true;
        continue;
      }

      ch[i][j] = true;

      const queue = [[i, j]];

      const oilGroupIndex = new Set();
      let oilSize = 1;

      while (queue.length) {
        const [i, j] = queue.shift();
        oilGroupIndex.add(j);

        for (let k = 0; k < move.length; k++) {
          const [y, x] = move[k];

          if (
            i + y < 0 ||
            j + x < 0 ||
            i + y >= land.length ||
            j + x >= land[0].length
          )
            continue;

          const isVisit = ch[i + y][j + x];
          const hasOil = land[i + y][j + x];
          if (!isVisit && hasOil) {
            queue.push([i + y, j + x]);
            oilSize++;
          }

          ch[i + y][j + x] = true;
        }
      }

      oilGroupIndex.forEach((index) => {
        oilInGroup[index] += oilSize;
      });
    }
  }

  return Math.max(...oilInGroup);
}

console.log(
  solution([
    [0, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0],
    [1, 1, 0, 0, 0, 1, 1, 0],
    [1, 1, 1, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0, 1, 1],
  ])
);
