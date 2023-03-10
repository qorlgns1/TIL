let fs = require("fs");
let [N, input] = fs
  .readFileSync("../예제.txt")
  // .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(`\n`);

const arr = input.split(" ").map(Number);
// 첫번째는 증가하는 부분수열
// 두번째는 증가하는 부분수열에서 맨 마지막 수
const dp = [[1, arr[0], [arr[0]]]];

for (let i = 1; i < arr.length; i++) {
  const num = arr[i];
  let newMaxNum = Number.MIN_SAFE_INTEGER;
  let newCount = Number.MIN_SAFE_INTEGER;
  let index = 0;
  for (let j = dp.length - 1; j >= 0; j--) {
    const [count, maxNum] = dp[j];

    if (count > newCount && num > maxNum) {
      newCount = count;
      newMaxNum = maxNum;
      index = j;
    }
  }

  dp.push([
    newCount > 0 ? newCount + 1 : 1,
    num,
    newCount > 0 ? [...dp[index][2], num] : [num],
  ]);
}

let findIndex = 0;
const result = dp.reduce((acc, [count], i) => {
  if (count > acc) {
    findIndex = i;
    return count;
  } else {
    return acc;
  }
}, 0);
console.log(result);
console.log(dp[findIndex][2].join(" "));
