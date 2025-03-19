// 나중에 다시..... 잘 풀어보자.....
function solution(storage, requests) {
  const N = storage.length;
  const M = storage[0].length;
  let container = N * M;
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  // 2차원 배열 생성 및 초기화 (-1로 채움)
  const map = Array(N + 2)
    .fill()
    .map(() => Array(M + 2).fill(-1));

  // storage 배열 정보를 map에 입력
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      const x = storage[i].charAt(j);
      map[i + 1][j + 1] = x.charCodeAt(0) - "A".charCodeAt(0);
    }
  }

  // 각 명령 처리
  for (const command of requests) {
    const target = command.charAt(0).charCodeAt(0) - "A".charCodeAt(0);

    if (command.length === 2) {
      // 크레인으로 제거하는 경우 (ex: "A+")
      for (let i = 1; i < N + 1; i++) {
        for (let j = 1; j < M + 1; j++) {
          if (map[i][j] === target) {
            map[i][j] = -1;
            container--;
          }
        }
      }
    } else {
      // 지게차로 제거하는 경우 (ex: "A")
      const visited = Array(N + 2)
        .fill()
        .map(() => Array(M + 2).fill(false));
      const q = [];
      visited[0][0] = true;
      q.push([0, 0]);

      while (q.length > 0) {
        const cur = q.shift();
        const x = cur[0];
        const y = cur[1];

        for (let i = 0; i < 4; i++) {
          const mx = x + dx[i];
          const my = y + dy[i];

          if (
            canGo(mx, my, N, M) &&
            !visited[mx][my] &&
            (map[mx][my] === target || map[mx][my] === -1)
          ) {
            if (map[mx][my] === target) {
              container--;
              map[mx][my] = -1;
              visited[mx][my] = true;
              continue;
            }
            q.push([mx, my]);
            visited[mx][my] = true;
          }
        }
      }
    }
  }

  return container;
}

function canGo(x, y, N, M) {
  return x >= 0 && y >= 0 && x < N + 2 && y < M + 2;
}

// function solution(storage, requests) {
//   var answer = 0;
//   const map = new Map();
//   // 상하좌우
//   const moves = [
//     [-1, 0],
//     [1, 0],
//     [0, -1],
//     [0, 1],
//   ];

//   let check = Array.from({ length: storage.length + 2 }, () =>
//     new Array(storage[0].length + 2).fill(0)
//   );

//   for (let i = 0; i < storage.length; i++) {
//     for (let k = 0; k < storage[i].length; k++) {
//       const alpabet = storage[i][k];
//       check[i + 1][k + 1] = alpabet;

//       if (map.has(alpabet)) {
//         map.set(alpabet, [...map.get(alpabet), [i + 1, k + 1]]);
//       } else {
//         map.set(alpabet, [[i + 1, k + 1]]);
//       }
//     }
//   }

//   for (let i = 0; i < requests.length; i++) {
//     const request = requests[i];
//     const alpabet = request[0];
//     const positions = map.get(alpabet);
//     const checkCompare = structuredClone(check);

//     for (let m = 0; m < positions.length; m++) {
//       const [rowPosition, colPosition] = positions[m];

//       if (request.length === 1) {
//         for (let l = 0; l < moves.length; l++) {}

//         const queue = [[rowPosition, colPosition]];

//         while (queue.length) {
//           const [rowPosition, colPosition] = queue.shift();

//         }

//         for (let l = 0; l < moves.length; l++) {
//           const [rowMove, colMove] = moves[l];

//           if (
//             checkCompare[rowPosition + rowMove][colPosition + colMove] === 0
//           ) {
//             check[rowPosition][colPosition] = 0;
//           }
//         }
//       }

//       if (request.length === 2) {
//         for (let j = 0; j < positions.length; j++) {
//           const [row, col] = positions[j];
//           check[row][col] = 0;
//         }

//         map.set(alpabet, []);
//       }
//     }
//   }

//   return answer;
// }

const storage = ["AZWQY", "CAABX", "BBDDA", "ACACA"];
const requests = ["A", "BB", "A"];

console.log(solution(storage, requests));
