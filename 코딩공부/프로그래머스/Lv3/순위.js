function solution(n, results) {
  var answer = 0;
  const adjListWinner = {};
  const adjListLoser = {};

  // 1번을 2번으로 대체
  // start 1번
  // results.forEach(([from, to]) => {
  //   adjListWinner[from] = adjListWinner[from]
  //     ? adjListWinner[from].add(to)
  //     : new Set([to]);
  //   adjListLoser[to] = adjListLoser[to]
  //     ? adjListLoser[to].add(from)
  //     : new Set([from]);
  // });
  // end 1번

  // start 2번
  for (let i = 1; i <= n; i++) {
    adjListWinner[i] = new Set();
    adjListLoser[i] = new Set();
  }

  results.forEach(([from, to]) => {
    adjListWinner[from] = adjListWinner[from].add(to);
    adjListLoser[to] = adjListLoser[to].add(from);
  });
  // end 2번

  for (let i = 1; i <= n; i++) {
    // i 선수를 이긴 선수(losers[i])들은 i 선수에게 패한 선수들(wins[i])도 이김
    for (const winner of [...adjListLoser[i]]) {
      if (!adjListWinner[winner]) continue;

      for (const loser of [...adjListWinner[i]]) {
        adjListWinner[winner].add(loser);
      }
    }

    // i 선수에게 패한 선수들은 i 선수를 이긴 선수들에게도 패함
    for (const loser of [...adjListWinner[i]]) {
      if (!adjListLoser[loser]) continue;

      for (const winner of [adjListLoser[i]]) {
        adjListLoser[loser].add(winner);
      }
    }
  }

  for (let i = 1; i <= n; i++) {
    const winnerLen = adjListWinner[i] ? adjListWinner[i].size : 0;
    const loserLen = adjListLoser[i] ? adjListLoser[i].size : 0;

    if (winnerLen + loserLen === n - 1) {
      answer++;
    }
  }

  return answer;
}

// ----------------------------------------------------------------------------------------------------

// 내 풀이
// 효율성 통과 못함
// function solution(n, results) {
//   var answer = 0;
//   const adjMatrix = new Array(n + 1)
//     .fill(0)
//     .map(() => new Array(n + 1).fill(0));

//   const adjListWinner = results.reduce((acc, [from, to]) => {
//     acc[from] = acc[from] ? acc[from].add(to) : new Set([to]);
//     // acc[to] = acc[to] ? acc[to].add(from) : new Set([from]);

//     return acc;
//   }, {});

//   const adjListLoser = results.reduce((acc, [from, to]) => {
//     // acc[from] = acc[from] ? acc[from].add(to) : new Set([to]);
//     acc[to] = acc[to] ? acc[to].add(from) : new Set([from]);

//     return acc;
//   }, {});

//   for (n of [...Object.keys(adjListWinner)]) {
//     n = Number(n);
//     function BFS(node) {
//       const queue = [node];

//       while (queue.length) {
//         const node = queue.shift();
//         if (n !== node) {
//           adjListWinner[n].add(node);
//         }

//         if (adjListWinner[node]) {
//           queue.push(...adjListWinner[node]);
//         }
//       }
//     }

//     BFS(n);
//   }

//   for (n of [...Object.keys(adjListLoser)]) {
//     n = Number(n);
//     function BFS(node) {
//       const queue = [node];

//       while (queue.length) {
//         const node = queue.shift();
//         if (n !== node) {
//           adjListLoser[n].add(node);
//         }

//         if (adjListLoser[node]) {
//           queue.push(...adjListLoser[node]);
//         }
//       }
//     }

//     BFS(n);
//   }

//   for (let i = 1; i <= n; i++) {
//     const winnerLen = adjListWinner[i] ? adjListWinner[i].size : 0;
//     const loserLen = adjListLoser[i] ? adjListLoser[i].size : 0;

//     if (winnerLen + loserLen === n - 1) {
//       answer++;
//     }
//   }

//   return answer;
// }

// ----------------------------------------------------------------------------------------------------

// 다른사람 코드 정답
// 플로이드 와샬 알고리즘 활용 풀이
// function solution(n, results) {
//   // 각 결과에 대해 2차원 배열에 표기
//   const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(false));
//   results.map((val) => {
//     const [win, lose] = val;
//     graph[win][lose] = 1;
//     graph[lose][win] = -1;
//     graph[win][win] = 0;
//     graph[lose][lose] = 0;
//   });

//   // Python의 range를 대체하여 좀더 간편하게 활용
//   const rangeN = [...Array(n).keys()].map((e) => e + 1);

//   // 플로이드 와샬 알고리즘 적용
//   for (const mid of rangeN) {
//     for (const a of rangeN) {
//       for (const b of rangeN) {
//         // a가 mid를 이기고, mid가 b를 이기면 a가 b를 이김
//         if (graph[a][mid] === 1 && graph[mid][b] === 1) graph[a][b] = 1;
//         // a가 mid에게 지고, mid가 b에게 지면 a가 b에게 짐
//         if (graph[a][mid] === -1 && graph[mid][b] === -1) graph[a][b] = -1;
//       }
//     }
//   }

//   // 경기결과를 추측할 수 없는 경우는 false로 그대로 남아있음
//   // 각 선수에 대해 false가 전혀 없는 경우만 ans + 1
//   let ans = 0;
//   for (const self of rangeN) {
//     let hasFalse = false;
//     for (const other of rangeN) {
//       if (graph[self][other] === false) {
//         hasFalse = true;
//         break;
//       }
//     }
//     ans += hasFalse ? 0 : 1;
//   }

//   return ans;
// }

// ----------------------------------------------------------------------------------------------------

// 다른사람 코드 정답
// function solution(n, results) {
//   const rangeN = [...Array(n).keys()].map((e) => e + 1);
//   // key: winner, value : Set([losers])
//   const wins = {};
//   // key: loser, value : Set([winners])
//   const loses = {};
//   rangeN.map((key) => {
//     wins[key] = new Set([]);
//     loses[key] = new Set([]);
//   });

//   // 승패 결과 저장
//   results.map((val) => {
//     const [winner, loser] = val;
//     wins[winner].add(loser);
//     loses[loser].add(winner);
//   });

//   rangeN.map((i) => {
//     // i 선수를 이긴 선수(losers[i])는 i 선수에게 패한 선수들(wins[i])도 이김
//     for (const winner of [...loses[i]]) {
//       if (!wins[winner]) continue;
//       for (const loser of wins[i]) {
//         wins[winner].add(loser);
//       }
//     }
//     // i 선수에게 패한 선수는 i선수를 이긴 선수들에게도 패함
//     for (const loser of [...wins[i]]) {
//       if (!loses[loser]) continue;
//       for (const winner of loses[i]) {
//         loses[loser].add(winner);
//       }
//     }
//   });

//   return rangeN.reduce(
//     (ans, i) => (wins[i].size + loses[i].size === n - 1 ? ans + 1 : ans),
//     0
//   );
// }

// ----------------------------------------------------------------------------------------------------

// 다른사람 코드 정답
// BFS 풀이
// function solution(n, results) {
//   var answer = 0;
//   const winGraph = [];
//   const loseGraph = [];

//   // 1. 경기 결과를 통해 이기는 방향의 그래프와 지는 방향의 그래프 두 그래프를 생성한다.
//   results.forEach((result) => {
//     const [winner, loser] = result;
//     if (winGraph[winner]) {
//       winGraph[winner].push(loser);
//     } else {
//       winGraph[winner] = [loser];
//     }

//     if (loseGraph[loser]) {
//       loseGraph[loser].push(winner);
//     } else {
//       loseGraph[loser] = [winner];
//     }
//   });

//   for (let i = 1; i <= n; i++) {
//     // 2. 모든 선수(노드) 별 두 그래프를 탐색하여 이기는 사람 + 지는 사람의 합을 구한다.
//     //    2-1. 이기는 방향 그래프에서 이기는 사람의 수를 구한다.
//     //    2-2. 지는 뱡향 그래프에서 지는 사람의 수를 구한다.
//     // 3. 이기는 사람의 수 + 지는 사람의 수 합이
//     //    전체 선수(n) - 1이랑 같다면 순위를 파악할 수 있는 사람이다.
//     if (bfs(winGraph, i) + bfs(loseGraph, i) === n - 1) {
//       answer++;
//     }
//   }

//   // 4. 순위를 파악할 수 있는 사람인 선수의 수를 세어 반환한다.
//   return answer;

//   function bfs(graph, start) {
//     const queue = [start];
//     const visited = [];
//     visited[start] = true;
//     let result = 0;

//     while (queue.length > 0) {
//       const node = queue.shift();
//       for (let nextNode of graph[node] || []) {
//         if (visited[nextNode] !== true) {
//           visited[nextNode] = true;
//           queue.push(nextNode);
//           result++;
//         }
//       }
//     }

//     return result;
//   }
// }

const n = 5;
const results = [
  [4, 3],
  [4, 2],
  [3, 2],
  [1, 2],
  [2, 5],
];

console.log(solution(n, results));
