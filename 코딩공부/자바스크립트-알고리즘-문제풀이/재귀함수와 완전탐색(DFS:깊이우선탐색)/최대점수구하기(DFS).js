// function solution(limit, questions) {
//   let answer = Number.MIN_SAFE_INTEGER;
//   const n = questions.length;
//   const ch = new Array(n).fill(0);

//   function DFS(i, sum) {
//     if (sum > limit) {
//       return;
//     }

//     if (i === n) {
//       let getSum = 0;
//       for (let i = 0; i < ch.length; i++) {
//         if (ch[i] > 0) {
//           getSum += questions[i][0];
//         }
//       }

//       // console.log(ch);
//       answer = Math.max(answer, getSum);
//     } else {
//       ch[i] = 1;
//       DFS(i + 1, sum + questions[i][1]); // 걸리는 시간 더해주기
//       ch[i] = 0;
//       DFS(i + 1, sum);
//     }
//   }

//   DFS(0, 0);

//   return answer;
// }

// console.log(
//   solution(20, [
//     [10, 5],
//     [25, 12],
//     [15, 8],
//     [6, 3],
//     [7, 4],
//   ])
// );

function solution(limit, questions) {
  let answer = Number.MIN_SAFE_INTEGER;
  const n = questions.length;

  function DFS(i, sum, time) {
    if (sum > limit) {
      return;
    }

    if (i === n) {
      answer = Math.max(answer, time);
    } else {
      DFS(i + 1, sum + questions[i][1], time + questions[i][0]); // 걸리는 시간 더해주기
      DFS(i + 1, sum, time);
    }
  }

  DFS(0, 0, 0);

  return answer;
}

console.log(
  solution(20, [
    [10, 5],
    [25, 12],
    [15, 8],
    [6, 3],
    [7, 4],
  ])
);
