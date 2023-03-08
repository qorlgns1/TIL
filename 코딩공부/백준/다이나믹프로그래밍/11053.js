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
const dp = [[1, arr[0]]];

for (let i = 1; i < arr.length; i++) {
  const num = arr[i];
  let newMaxNum = Number.MIN_SAFE_INTEGER;
  let newCount = Number.MIN_SAFE_INTEGER;

  for (let j = dp.length - 1; j >= 0; j--) {
    const [count, maxNum] = dp[j];

    if (count > newCount && num > maxNum) {
      newCount = count;
      newMaxNum = maxNum;
    }
  }

  dp.push([newCount > 0 ? newCount + 1 : 1, num]);
}

const result = dp.reduce((acc, [count]) => (count > acc ? count : acc), 0);
console.log(result);
