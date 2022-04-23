// 카카오 크레인 인형뽑기 문제
// https://programmers.co.kr/learn/courses/30/lessons/64061
// stack 이용

//풀이 1
// function solution(board, moves) {
//   let answer = 0;
//   let stack = [];
//   moves.forEach((pos) => {
//     for (let i = 0; i < board.length; i++) {
//       if (board[i][pos - 1] !== 0) {
//         let tmp = board[i][pos - 1];
//         board[i][pos - 1] = 0;
//         if (tmp === stack[stack.length - 1]) {
//           stack.pop();
//           answer += 2;
//         } else {
//           stack.push(tmp);
//         }
//         break;
//       }
//     }
//   });

//   return answer;
// }

//풀이 2
const solution = (board, moves) => {
  let answer = 0;
  let stack = [];

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] > 0) {
        if (stack[stack.length - 1] === stack[stack.length - 2]) {
          stack.pop();
          answer++;
        }

        board[j][moves[i] - 1] = 0;
        break;
      }
    }
  }

  return answer * 2;
};

let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));
