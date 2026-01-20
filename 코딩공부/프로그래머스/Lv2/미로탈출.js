// 실패
// 해설을 봐서 나중에 다시 풀어보기

function solution(maps) {
  // 상하좌우
  const move = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  // startIndex
  // x, y, useLever, finishStepCount, moveCount
  let queue = [];

  const mapOriginal = [];

  for (let i = 0; i < maps.length; i++) {
    const map = maps[i].split("");
    mapOriginal.push(map);

    const findStartRow = map.some((v) => v.includes("S"));
    if (findStartRow) {
      queue.push([i, map.indexOf("S"), false, 0, 1]);
    }
  }

  queue[0].push(mapOriginal);
  mapOriginal[queue[0][0]][queue[0][1]] = "X";

  while (queue.length) {
    const [y, x, useLever, finishStepCount, moveCount, map] = queue.shift();

    for (let i = 0; i < move.length; i++) {
      const [dy, dx] = move[i];

      const nextY = y + dy;
      const nextX = x + dx;

      if (
        nextY < 0 ||
        nextY >= maps.length ||
        nextX < 0 ||
        nextX >= maps[0].length ||
        map[nextY][nextX] === "X"
      ) {
        continue;
      }

      const position = map[nextY][nextX];

      if (position === "E") {
        if (useLever) return moveCount;

        map[nextY][nextX] = "X";
        queue.push([
          nextY,
          nextX,
          useLever,
          moveCount,
          moveCount + 1,
          JSON.parse(JSON.stringify(map)),
        ]);
      }

      if (position === "L") {
        if (finishStepCount) {
          return moveCount + (moveCount - finishStepCount);
        }

        map[nextY][nextX] = "X";
        queue.push([
          nextY,
          nextX,
          !useLever,
          finishStepCount,
          moveCount + 1,
          JSON.parse(JSON.stringify(map)),
        ]);
      }

      if (position === "O") {
        map[nextY][nextX] = "X";
        queue.push([
          nextY,
          nextX,
          useLever,
          finishStepCount,
          moveCount + 1,
          JSON.parse(JSON.stringify(map)),
        ]);
      }
    }
  }

  return -1;
}

console.log(solution(["LOOXS", "OOOOX", "OOOOO", "OOOOO", "EOOOO"]));
