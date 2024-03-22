function solution(n, times) {
  times.sort((a, b) => a - b);

  let min = 0;
  let max = (times.at(-1) * n) / times.length;

  while (min < max) {
    const mid = Math.floor((min + max) / 2);
    let count = 0;
    for (let i = 0; i < times.length; i++) {
      count += Math.floor(mid / times[i]);
    }

    if (count >= n) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }

  return max;
}

const n = 6;
const times = [10, 7];

console.log(solution(n, times));
