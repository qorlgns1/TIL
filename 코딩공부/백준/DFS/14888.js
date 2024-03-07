// // https://www.acmicpc.net/problem/14888

let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
let [[N], arr, calArr] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((input) => input.split(' ').map(Number));

let max = Number.MIN_SAFE_INTEGER;
let min = Number.MAX_SAFE_INTEGER;

function dfs(sum, calArr, numberIndex) {
  if (numberIndex === N) {
    max = Math.max(sum, max);
    min = Math.min(sum, min);
  } else {
    for (let i = 0; i < calArr.length; i++) {
      if (calArr[i] > 0) {
        calArr[i] = calArr[i] - 1;

        if (i === 0) dfs(sum + arr[numberIndex], calArr, numberIndex + 1);
        if (i === 1) dfs(sum - arr[numberIndex], calArr, numberIndex + 1);
        if (i === 2) dfs(sum * arr[numberIndex], calArr, numberIndex + 1);
        if (i === 3) {
          if (sum < 0) {
            dfs(
              Math.floor(Math.abs(sum) / arr[numberIndex]) * -1,
              calArr,
              numberIndex + 1
            );
          } else {
            dfs(Math.floor(sum / arr[numberIndex]), calArr, numberIndex + 1);
          }
        }

        calArr[i] = calArr[i] + 1;
      }
    }
  }
}

dfs(arr[0], calArr, 1);

console.log([Math.max(max), Math.max(min)].join('\n'));

// ----------------------------------

// 위와 같은 정답
// 어떤 연산이 되고 있는지 확인
// let fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
// let [[N], arr, calArr] = fs
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split('\n')
//   .map((input) => input.split(' ').map(Number));

// let max = Number.MIN_SAFE_INTEGER;
// let min = Number.MAX_SAFE_INTEGER;

// let maxAnswer = [];
// let minAnswer = [];

// function dfs(sum, calArr, numberIndex, operAnswer) {
//   if (numberIndex === N) {
//     if (sum > max) {
//       maxAnswer = [operAnswer];
//       max = Math.max(sum, max);
//     } else if (sum === max) {
//       maxAnswer.push(operAnswer);
//       max = Math.max(sum, max);
//     } else {
//     }

//     if (sum < min) {
//       minAnswer = [operAnswer];
//       min = Math.min(sum, min);
//     } else if (sum === min) {
//       minAnswer.push(operAnswer);
//       min = Math.min(sum, min);
//     } else {
//     }
//   } else {
//     for (let i = 0; i < calArr.length; i++) {
//       if (calArr[i] > 0) {
//         calArr[i] = calArr[i] - 1;

//         if (i === 0)
//           dfs(sum + arr[numberIndex], calArr, numberIndex + 1, [
//             ...operAnswer,
//             '+',
//           ]);
//         if (i === 1)
//           dfs(sum - arr[numberIndex], calArr, numberIndex + 1, [
//             ...operAnswer,
//             '-',
//           ]);
//         if (i === 2)
//           dfs(sum * arr[numberIndex], calArr, numberIndex + 1, [
//             ...operAnswer,
//             '*',
//           ]);
//         if (i === 3) {
//           if (sum < 0) {
//             dfs(Math.floor(Math.abs(sum) / arr[numberIndex]) * -1, calArr, numberIndex + 1, [
//               ...operAnswer,
//               '/',
//             ]);
//           } else {
//             dfs(Math.floor(sum / arr[numberIndex]), calArr, numberIndex + 1, [
//               ...operAnswer,
//               '/',
//             ]);
//           }
//         }

//         calArr[i] = calArr[i] + 1;
//       }
//     }
//   }
// }

// dfs(arr[0], calArr, 1, []);

// console.log(max);
// console.log(maxAnswer);
// console.log(min);
// console.log(minAnswer);
