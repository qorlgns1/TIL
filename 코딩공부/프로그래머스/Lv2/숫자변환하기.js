function solution(x, y, n) {
  const map = {};
  // [number, count]
  const queue = [[x, 0]];

  while (queue.length) {
    const [num, count] = queue.shift();

    if (num === y) return count;

    const doubleNum = num * 2;
    const tripleNum = num * 3;
    const addedNum = num + n;

    if (!map[doubleNum] && doubleNum <= y) {
      queue.push([doubleNum, count + 1]);
      map[doubleNum] = true;
    }

    if (!map[tripleNum] && tripleNum <= y) {
      queue.push([tripleNum, count + 1]);
      map[tripleNum] = true;
    }

    if (!map[addedNum] && addedNum <= y) {
      queue.push([addedNum, count + 1]);
      map[addedNum] = true;
    }
  }

  return -1;
}

function solution(x, y, n) {
  const dp = new Array(y + 1).fill(Infinity);
  dp[x] = 0;

  for (let i = x; i < y; i++) {
    dp[i + n] = Math.min(dp[i + n], dp[i] + 1);
    dp[i * 2] = Math.min(dp[i * 2], dp[i] + 1);
    dp[i * 3] = Math.min(dp[i * 3], dp[i] + 1);
  }

  return dp[y] !== Infinity ? dp[y] : -1;
}

const x = [10, 10, 2];
const y = [40, 40, 5];
const n = [5, 30, 4];

for (let i = 0; i < x.length; i++) {
  console.log(solution(x[i], y[i], n[i]));
}
