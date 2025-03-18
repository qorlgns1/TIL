// // BFS 풀이 시간초과
// function solution(land) {
//   const MAX_LAND_DEPTH = land.length;
//   let maxPointSum = 0;

//   function bfs(pointSum, positionIndex, depth) {
//     if (depth === MAX_LAND_DEPTH) {
//       if (maxPointSum < pointSum) {
//         maxPointSum = pointSum;
//         return;
//       }
//     } else {
//       for (let i = 0; i < land[depth].length; i++) {
//         if (i === positionIndex) {
//           continue;
//         }

//         const point = land[depth][i];
//         bfs(point + pointSum, i, depth + 1);
//       }
//     }
//   }

//   for (let i = 0; i < land[0].length; i++) {
//     const point = land[0][i];

//     bfs(point, i, 1);
//   }

//   return maxPointSum;
// }

// 열의 개수가 4개라는 조건이 존재하여 중복되지 않는 인덱스에 있는 값을 더해가는 동적계획법을 활용한 풀이 방법
function solution(land) {
  for (let i = land.length - 2; i >= 0; i--) {
    land[i][0] =
      Math.max(land[i + 1][1], land[i + 1][2], land[i + 1][3]) + land[i][0];
    land[i][1] =
      Math.max(land[i + 1][0], land[i + 1][2], land[i + 1][3]) + land[i][1];
    land[i][2] =
      Math.max(land[i + 1][0], land[i + 1][1], land[i + 1][3]) + land[i][2];
    land[i][3] =
      Math.max(land[i + 1][0], land[i + 1][1], land[i + 1][2]) + land[i][3];
  }

  return Math.max(...land[0]);
}

console.log(
  solution([
    [1, 2, 3, 5],
    [5, 6, 7, 8],
    [4, 3, 2, 1],
  ])
);
