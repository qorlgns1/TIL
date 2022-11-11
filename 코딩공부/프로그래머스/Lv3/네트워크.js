// 내가 푼 틀린 풀이 (왜틀렸는지 모르겠음...)

// function solution(n, computers) {
//   let answer = 0;

//   const dx = [-1, 0, 1, 0];
//   const dy = [0, 1, 0, -1];

//   function DFS(x, y) {
//     computers[x][y] = 0;

//     for (let i = 0; i < 4; i++) {
//       const nx = dx[i] + x;
//       const ny = dy[i] + y;

//       if (
//         nx >= 0 &&
//         ny >= 0 &&
//         nx < computers[0].length &&
//         nx < computers.length &&
//         computers[nx][ny] === 1
//       ) {
//         DFS(nx, ny);
//       }
//     }
//   }

//   // computers[0][0] = 0;

//   for (let i = 0; i < computers.length; i++) {
//     for (let j = 0; j < computers.length; j++) {
//       for (let k = 0; k < 4; k++) {
//         const nx = dx[k] + i;
//         const ny = dy[k] + j;

//         if (
//           nx >= 0 &&
//           ny >= 0 &&
//           nx < computers[0].length &&
//           nx < computers.length &&
//           computers[nx][ny] === 1
//         ) {
//           DFS(nx, ny);
//           answer++;
//         }
//       }
//     }
//   }

//   return answer;
// }

// 민주님 풀이
// function solution(n, computers) {
//   let answer = 0;
//   const check_array = Array.from({ length: n }, () => 0); // 체크배열

//   for (let i = 0; i < n; i++) {
//     // n번만큼 순회를 하자
//     if (check_array[i] === 0) {
//       DFS(i);
//       answer++;
//       console.log('i: ', i);
//     }
//   }

//   function DFS(i) {
//     check_array[i] = 1; //체크해놓기
//     for (let j = 0; j < n; j++) {
//       if (computers[i][j] === 1 && check_array[j] === 0 && i !== j) {
//         console.log('j: ', j);
//         DFS(j);
//       }
//     }
//   }

//   return answer;
// }

// 다른사람 풀이
// function solution(n, computers) {
//   let visited = [false];
//   let answer = 0;

//   function dfs(i) {
//     visited[i] = true;
//     for (let j = 0; j < computers[i].length; j++) {
//       if (computers[i][j] === 1 && !visited[j]) {
//         dfs(j);
//       }
//     }
//   }

//   for (let i = 0; i < computers.length; i++) {
//     if (!visited[i]) {
//       dfs(i);
//       answer++;
//     }
//   }
//   return answer;
// }

function solution(n, computers) {
  let answer = 0;
  let visited = [];

  function DFS(i) {
    visited[i] = true;

    for (let j = 0; j < computers.length; j++) {
      if (!visited[j] && computers[i][j] === 1) {
        DFS(j);
      }
    }
  }

  for (let i = 0; i < computers.length; i++) {
    if (!visited[i]) {
      DFS(i);
      answer++;
    }
  }

  return answer;
}

console.log(
  solution(3, [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
  ])
);

// console.log(
//   solution(3, [
//     [1, 1, 0, 1],
//     [0, 1, 0, 1],
//     [0, 1, 1, 1],
//     [0, 0, 1, 1],
//   ])
// );
