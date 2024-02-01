function solution(n, times) {
  var answer = 0;
  times.sort((a, b) => a - b);

  let min = 1;
  let max = (times.at(-1) * n) / times.length;

  while (min !== max) {
    const mid = Math.floor((min + max) / 2);

    const count = times.reduce((acc, time) => {
      return acc + Math.floor(mid / time);
    }, 0);

    if (count >= n) {
      max = mid;
    } else {
      min = mid + 1;
    }
  }

  return min;
}

// function solution(n, times) {
//   times.sort((a, b) => a - b);
//   let left = 1;
//   let right = n * times[times.length - 1];
//   let answer = right; // 최대값.
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     let count = 0;
//     times.forEach((value) => {
//       count += Math.floor(mid / value); // 한 사람당 몇명 할 수 있는지
//       if (count >= n) {
//         answer = Math.min(mid, answer); // 최솟값
//         return;
//       }
//     });
//     if (count >= n) {
//       right = mid - 1;
//     } else {
//       left = mid + 1;
//     }
//   }
//   return answer;
// }
const n = 6;
const times = [7, 10];

console.log(solution(n, times));
