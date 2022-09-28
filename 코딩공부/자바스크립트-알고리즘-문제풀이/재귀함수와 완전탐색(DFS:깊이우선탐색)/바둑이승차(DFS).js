// 방법 1
// function solution(max, arr) {
//   const ch = new Array(arr.length).fill(0);
//   const answer = [];

//   function DFS(i) {
//     if (i >= arr.length) {
//       console.log(ch.join(' '));

//       let sum = 0;
//       ch.forEach((v, i) => {
//         if (ch[i] > 0) {
//           sum += arr[i];
//         }
//       });

//       if (sum <= max) {
//         answer.push(sum);
//       }
//     } else {
//       ch[i] = 1;
//       DFS(i + 1);
//       ch[i] = 0;
//       DFS(i + 1);
//     }
//   }

//   DFS(0);
//   return Math.max(...answer);
// }

// console.log(solution(259, [81, 58, 42, 33, 61]));

// -------------------------------------

// 방법 2

function solution(max, arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  function DFS(L, sum) {
    if (sum > max) {
      return;
    }

    if (L === arr.length) {
      answer = Math.max(answer, sum);
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }

  DFS(0, 0);
  return answer;
}

console.log(solution(259, [81, 58, 42, 33, 61]));
