// // https://www.acmicpc.net/problem/15658

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
