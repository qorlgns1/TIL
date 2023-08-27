// function solution(word) {
//   const alpabet = ['A', 'E', 'I', 'O', 'U'];

//   const ch = [
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0],
//   ];
//   const ch1 = [0, 0, 0, 0, 0];
//   const ch2 = [0, 0, 0, 0, 0];
//   const ch3 = [0, 0, 0, 0, 0];
//   const ch4 = [0, 0, 0, 0, 0];
//   const ch5 = [0, 0, 0, 0, 0];

//   let count = 0;

//   for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 5; j++) {
//       ch[j][i] = 1;
//     }

//     for (let k = 0; k < 5; k++) {
//       ch[5 - i - 1][k] = 1;
//     }
//   }

//   var answer = 0;
//   return answer;
// }

// function solution(word) {
//   let answer = 0;
//   const aeiou = { A: 0, E: 1, I: 2, O: 3, U: 4 };
//   const sumSquare = [781, 156, 31, 6, 1];

//   [...word].forEach((w, idx) => {
//     const val = aeiou[w];
//     answer += val * sumSquare[4 - idx] + 1;
//   });

//   return answer;
// }

function solution(word) {
  let alpha = ['A', 'E', 'I', 'O', 'U'];
  for (let i = 1; i <= 5; i++) {
    dfs(alpha, 0, i);
  }
  // console.log(answers.sort());
  return answers.sort().indexOf(word) + 1;
}
let answers = [];
function dfs(alpha, depth, num, arr = []) {
  if (depth == num) {
    let str = arr.join('');
    answers.push(str);
  } else {
    for (let i = 0; i < alpha.length; i++) {
      arr.push(alpha[i]);
      dfs(alpha, depth + 1, num, arr);
      arr.pop();
    }
  }
}
let word = 'AAAE';
console.log(solution(word));

console.log(solution('AAAAE'));
