// queue로 풀어서 시간초과
// function solution(m, n, puddles) {
//   const map = Array.from({ length: n }, () =>
//     Array.from({ length: m }, () => true)
//   );

//   puddles.forEach(([x, y]) => {
//     map[y - 1][x - 1] = false;
//   });

//   // 아래방향, 오른쪽방향
//   const moves = [
//     [1, 0],
//     [0, 1],
//   ];

//   // y, x, moveCount
//   const queue = [[0, 0, 1]];
//   let minMoveCount = Number.MAX_SAFE_INTEGER;
//   let answer = 0;

//   while (queue.length) {
//     const [y, x, moveCount] = queue.shift();

//     if (moveCount > minMoveCount) break;

//     const isArrive = y === n - 1 && x === m - 1;
//     if (isArrive) {
//       minMoveCount = Math.min(minMoveCount, moveCount);
//       answer++;

//       continue;
//     }

//     for (let i = 0; i < moves.length; i++) {
//       const [my, mx] = moves[i];

//       const ny = my + y;
//       const nx = mx + x;

//       if (ny >= n || nx >= m || !map[ny][nx]) continue;

//       queue.push([ny, nx, moveCount + 1]);
//     }
//   }

//   return answer % 1000000007;
// }

// -----------------------------------

// queue로 풀어서 시간초과
// function solution(m, n, puddles) {
//   const dpMap = Array.from({ length: n }, () =>
//     Array.from({ length: m }, () => Number.MAX_SAFE_INTEGER)
//   );

//   dpMap[0][0] = 1;

//   puddles.forEach(([x, y]) => {
//     dpMap[y - 1][x - 1] = -1;
//   });

//   // 아래방향, 오른쪽방향
//   const moves = [
//     [1, 0],
//     [0, 1],
//   ];

//   let answer = 0;

//   // y, x, moveCount
//   const queue = [[0, 0, 1]];

//   let minMoveCount = Number.MAX_SAFE_INTEGER;

//   while (queue.length) {
//     const [y, x, moveCount] = queue.shift();

//     const isArrive = y === n - 1 && x === m - 1;
//     if (isArrive) {
//       if (moveCount !== minMoveCount) {
//         answer = 1;

//         minMoveCount = Math.min(minMoveCount, moveCount);
//       } else {
//         answer++;
//       }

//       continue;
//     }

//     for (let i = 0; i < moves.length; i++) {
//       const [my, mx] = moves[i];

//       const ny = my + y;
//       const nx = mx + x;

//       if (ny >= n || nx >= m || dpMap[ny][nx] === -1) continue;

//       if (dpMap[ny][nx] >= moveCount + 1) {
//         dpMap[ny][nx] = Math.min(dpMap[ny][nx], moveCount + 1);
//         queue.push([ny, nx, moveCount + 1]);
//       }
//     }
//   }

//   return answer % 1000000007;
// }

// ----------------------------

// 자바스크립트로 잘 안풀림
// 맞는 정답이여도 시간초과가 뜰때가 있고 안뜰때가 있음
function solution(m, n, puddles) {
  const dpMap = Array.from({ length: n + 1 }, () =>
    Array.from({ length: m + 1 }, () => 0)
  );

  dpMap[1][1] = 1;

  puddles.forEach(([x, y]) => {
    dpMap[y][x] = -1;
  });

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (dpMap[i][j] === -1) continue;

      if (dpMap[i - 1][j] !== -1) {
        dpMap[i][j] = (dpMap[i][j] + dpMap[i - 1][j]) % 1000000007;
      }

      if (dpMap[i][j - 1] !== -1) {
        dpMap[i][j] = (dpMap[i][j] + dpMap[i][j - 1]) % 1000000007;
      }
    }
  }

  return dpMap[n][m];
}

console.log(solution(4, 3, [[2, 2]]));
