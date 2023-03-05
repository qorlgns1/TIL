// 방향성은 맞으나 count를 10000000009로 나눠서 출력해야하는데 그러면 값이 이상해져서 실패
// let fs = require("fs");
// let input = fs.readFileSync("../예제.txt").toString();
// // let input = fs.readFileSync("/dev/stdin").toString();
// const [T, ...n] = input.trim().split("\n").map(Number);

// const countMinus1 = [0, 1, 0, 1];
// const countMinus2 = [0, 0, 1, 1];
// const countMinus3 = [0, 0, 0, 1];
// const count = [0, 1, 1, 3];

// for (let i = 4; i <= Math.max(...n); i++) {
//   countMinus1.push(count[i - 1] - countMinus1[i - 1]);
//   countMinus2.push(count[i - 2] - countMinus2[i - 2]);
//   countMinus3.push(count[i - 3] - countMinus3[i - 3]);

//   count.push(
//     count[i - 1] -
//       countMinus1[i - 1] +
//       count[i - 2] -
//       countMinus2[i - 2] +
//       count[i - 3] -
//       countMinus3[i - 3]
//   );
// }

// n.forEach((num) => {
//   console.log(count[num]);
// });

let fs = require("fs");
let input = fs.readFileSync("../예제.txt").toString();
// let input = fs.readFileSync("/dev/stdin").toString();
const [T, ...n] = input.trim().split("\n").map(Number);

// 사용된 값
const count1 = [0, 1, 0, 1];
const count2 = [0, 0, 1, 1];
const count3 = [0, 0, 0, 1];

for (let i = 4; i <= Math.max(...n); i++) {
  count1.push((count2[i - 1] + count3[i - 1]) % 1000000009);
  count2.push((count1[i - 2] + count3[i - 2]) % 1000000009);
  count3.push((count1[i - 3] + count2[i - 3]) % 1000000009);
}

n.forEach((num) => {
  console.log((count1[num] + count2[num] + count3[num]) % 1000000009);
});
