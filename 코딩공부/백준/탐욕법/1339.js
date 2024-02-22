// https://www.acmicpc.net/problem/1339
// 반례
// 10
// ABB
// BB
// BB
// BB
// BB
// BB
// BB
// BB
// BB
// BB

// 오답
// let fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
// let [N, ...inputs] = fs.readFileSync(filePath).toString().trim().split('\n');

// const map = new Map();
// const maxLen = inputs.reduce((acc, cur) => {
//   return Math.max(acc, cur.length);
// }, -1);

// inputs.forEach((input) => {
//   const alpabets = input.split('');

//   alpabets.forEach((alpabet, i) => {
//     const tenPower = input.length - 1 - i;

//     if (map.get(tenPower)) {
//       const findAlpabet = map.get(tenPower).find(([str]) => str === alpabet);

//       if (findAlpabet) {
//         map.set(tenPower, [
//           ...map.get(tenPower),
//           [alpabet, findAlpabet[1] + 1],
//         ]);
//       } else {
//         map.set(tenPower, [...map.get(tenPower), [alpabet, 1]]);
//       }
//     } else {
//       map.set(tenPower, [[alpabet, 1]]);
//     }
//   });
// });

// const alpabetMap = new Map();
// let point = 9;
// for (let i = maxLen - 1; i >= 0; i--) {
//   const arr = map.get(i);
//   arr.sort((a, b) => b[1] - a[1]);

//   arr.forEach(([alpabet]) => {
//     if (!alpabetMap.get(alpabet)) {
//       alpabetMap.set(alpabet, point--);
//     }
//   });
// }

// let answer = 0;
// inputs.forEach((word) => {
//   let sum = '';
//   const alpabets = word.split('');
//   alpabets.forEach((alpabet) => {
//     sum += alpabetMap.get(alpabet).toString();
//   });

//   answer += Number(sum);
// });

// console.log(answer);

// ------------------------------------------

let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
let [N, ...inputs] = fs.readFileSync(filePath).toString().trim().split('\n');

const map = new Map();
inputs.forEach((input) => {
  [...input].forEach((alpabet, i) => {
    if (map.get(alpabet)) {
      map.set(alpabet, {
        score: map.get(alpabet).score + 10 ** (input.length - i - 1),
      });
    } else {
      map.set(alpabet, { score: 10 ** (input.length - i - 1) });
    }
  });
});

const points = [];
map.forEach((val, key) => {
  points.push([key, val.score]);
});

points.sort((a, b) => b[1] - a[1]);

points.forEach(([key, val], i) => {
  const point = 9 - i;
  map.set(key, {
    ...map.get(key),
    point,
  });
});

let answer = 0;
inputs.forEach((word) => {
  let sum = '';

  [...word].forEach((alpabet) => {
    sum += map.get(alpabet).point.toString();
  });

  answer += Number(sum);
});

console.log(answer);
