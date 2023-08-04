// https://school.programmers.co.kr/learn/courses/30/lessons/178870

// function solution(sequence, k) {
//   let answer = [];
//   let lt = 0;
//   let rt = -1;
//   let sum = 0;

//   for (let i = 0; i < sequence.length; i++) {
//     rt = i;
//     sum += sequence[rt];

//     if (sum === k) {
//       const [beforeLt, beforeRt] = answer;
//       if (!answer.length || beforeRt - beforeLt > rt - lt) {
//         answer = [lt, rt];
//       }

//       while (sum >= k) {
//         sum -= sequence[lt++];

//         if (sum === k) {
//           const [beforeLt, beforeRt] = answer;
//           if (!answer.length || beforeRt - beforeLt > rt - lt) {
//             answer = [lt, rt];
//           }
//         }
//       }

//       if (lt > rt) {
//         rt = lt;
//         i = lt;
//       }

//       continue;
//     }

//     if (sum > k) {
//       while (sum >= k) {
//         sum -= sequence[lt++];

//         if (sum === k) {
//           const [beforeLt, beforeRt] = answer;
//           if (!answer.length || beforeRt - beforeLt > rt - lt) {
//             answer = [lt, rt];
//           }
//         }
//       }

//       if (lt > rt) {
//         rt = lt;
//         i = lt;
//       }
//     }
//   }
//   return answer;
// }

function solution(sequence, k) {
  let answer = [0, sequence.length - 1];
  let lt = 0;
  let sum = 0;

  for (let rt = 0; rt < sequence.length; rt++) {
    sum += sequence[rt];

    if (sum === k) {
      const [beforeLt, beforeRt] = answer;
      if (beforeRt - beforeLt > rt - lt) {
        answer = [lt, rt];
      }

      while (sum >= k) {
        sum -= sequence[lt++];

        if (sum === k) {
          const [beforeLt, beforeRt] = answer;
          if (beforeRt - beforeLt > rt - lt) {
            answer = [lt, rt];
          }
        }
      }
    } else if (sum > k) {
      while (sum >= k) {
        sum -= sequence[lt++];

        if (sum === k) {
          const [beforeLt, beforeRt] = answer;
          if (beforeRt - beforeLt > rt - lt) {
            answer = [lt, rt];
          }
        }
      }
    }
  }
  return answer;
}

// 프로그래머스 정답
function solution1(sequence, k) {
  var answer = [0, sequence.length - 1];
  let lt = 0;
  let rt = 0;

  let sum = sequence[lt];
  while (rt < sequence.length) {
    if (sum > k) {
      sum -= sequence[lt];
      lt++;
    } else if (sum < k) {
      rt++;
      sum += sequence[rt];
    } else {
      let distance = answer[1] - answer[0];
      let currentDistance = rt - lt;
      if (distance > currentDistance) {
        answer = [lt, rt];
      }
      sum -= sequence[lt];
      lt++;
    }
  }

  return answer;
}

function solution(sequence, k) {
  var answer = [0, sequence.length - 1];
  let lt = 0;
  let rt = 0;
  let sum = sequence[lt];

  while (rt < sequence.length) {
    if (sum < k) {
      sum += sequence[++rt];
    } else if (sum > k) {
      sum -= sequence[lt++];
    } else {
      const distance = answer[1] - answer[0];
      const currentDistance = rt - lt;
      if (distance > currentDistance) {
        answer = [lt, rt];
      }
      sum -= sequence[lt++];
    }
  }

  return answer;
}

const sequence = [3, 2, 3, 4, 5];
const k = 5;

console.log(solution(sequence, k));
