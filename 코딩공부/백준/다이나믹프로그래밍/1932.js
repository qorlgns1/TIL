// https://www.acmicpc.net/problem/1932
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
let [[N], ...arr] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((input) => input.split(' ').map(Number));

for (let i = N - 1; i >= 1; i--) {
  const parentNode = arr[i - 1];
  const parentNodeLength = parentNode.length;
  for (let j = 0; j < parentNodeLength; j++) {
    let rootValue = parentNode[j];
    const leftChild = arr[i][j];
    const rightChild = arr[i][j + 1];

    parentNode[j] = rootValue + Math.max(leftChild, rightChild);
  }
}

const rootNode = arr[0][0];
console.log(rootNode);

// console.log(Math.max(...dp[dp.length - 1]));

// 내가 틀리게 푼 답
// let fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
// let [[N], ...arr] = fs
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split('\n')
//   .map((input) => input.split(' ').map(Number));

// const dp = [[arr[0][0]]];

// for (let i = 0; i < N - 1; i++) {
//   const temp = [];
//   const childrenNodeLength = arr[i + 1].length;

//   for (let j = 0; j < childrenNodeLength - 1; j++) {
//     const root = dp[i][j];
//     const left = arr[i + 1][j];
//     const right = arr[i + 1][j + 1];

//     temp.push(root + left);
//     temp.push(root + right);
//   }

//   dp.push(temp);
// }

// console.log(Math.max(...dp[dp.length - 1]));

// 다른사람 정답1
// const solve = (n, triangle) => {
//   if (n === 1) return triangle[0][0];
//   else if (n === 2) return triangle[0][0] + Math.max(...triangle[1]);
//   for (let i = n - 2; i >= 0; i--) {
//     triangle[i].forEach((v, idx, arr) => {
//       arr[idx] = v + Math.max(triangle[i + 1][idx], triangle[i + 1][idx + 1]);
//     });
//   }
//   return triangle[0][0];
// };

// const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
// const [n, ...triangle] = require('fs')
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split('\n');
// triangle.forEach((v, i, arr) => (arr[i] = v.split(' ').map((vv) => +vv)));
// console.log(solve(+n, triangle));

// 다른사람 정답2
// let fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
// let [[N], ...inputArr] = fs
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split('\n')
//   .map((input) => input.split(' ').map(Number));

// const dp = [[inputArr[0][0]]];

// for (let i = 1; i < N; i++) {
//   for (let j = 0; j < inputArr[i].length; j++) {
//     if (j == 0) inputArr[i][j] = inputArr[i][j] + inputArr[i - 1][0]; // 1
//     else if (j + 1 == inputArr[i].length)
//       inputArr[i][j] = inputArr[i][j] + inputArr[i - 1][j - 1]; // 2
//     else
//       inputArr[i][j] =
//         inputArr[i][j] + Math.max(inputArr[i - 1][j], inputArr[i - 1][j - 1]); // 3
//   }
// }
// console.log(Math.max(...inputArr[N - 1]));
