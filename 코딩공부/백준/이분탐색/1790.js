// https://www.acmicpc.net/problem/1790

let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
const [N, k] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const solution = (N, k) => {
  let length = 0;
  let digits = 1;

  for (let i = 1; i <= N; i *= 10) {
    const end = Math.min(N, i * 10 - 1);
    const start = i;
    const count = end - start + 1;
    const currentLength = count * digits;

    if (length + currentLength >= k) {
      const numberOffset = Math.ceil((k - length) / digits) - 1;
      const number = start + numberOffset;
      const digitIndex = (k - length - 1) % digits;
      return String(number)[digitIndex];
    }

    length += currentLength;
    digits++;
  }

  return -1;
};

console.log(solution(N, k));

// 다른사람 정답 1
// let fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
// let [N, K] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);
// let nNumber = 9; // 해당 자릿수에 해당하는 숫자 갯수
// let digit = 1; // 자릿
// let ans = 0;

// for (; K > nNumber * digit; digit++, nNumber *= 10) {
//   K -= nNumber * digit;

//   ans += nNumber;
// }

// ans += Math.ceil(K / digit);

// if (ans > N) console.log(-1);
// else console.log(String(ans).charAt((K - 1) % digit));

// 오답쓰
// let fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
// const [N, k] = fs
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split(' ')
//   .map(Number);

// const solution = (N, k) => {
//   let answer = -1;
//   const MAX = 100000000;
//   const dp = [0];
//   let num = 0;
//   while (true) {
//     const cal = 9 * 10 ** num++ * num;
//     if (cal > MAX) break;

//     dp.push(cal);
//   }

//   // N의 길이를 확인하고
//   // const 십의몇승단위1 = k.toString().length - 1;
//   const 십의몇승단위 = N.toString().length - 1;

//   const 남은수 = k - dp[십의몇승단위];

//   if (남은수 <= 0) {
//     return -1;
//   }

//   let a = 10 ** 십의몇승단위;
//   let str = '';
//   while (!str[남은수]) {
//     str += a++;
//     if (str[남은수]) return str[남은수 - 1];
//   }
// };

// console.log(solution(N, k));

// 메모리 초과 2
// let fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
// const [N, k] = fs
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split(' ')
//   .map(Number);

// const solution = (N, k) => {
//   let answer = -1;
//   let min = 1;
//   let max = N;
//   let cnt = 0;

//   while (min <= max) {
//     const mid = Math.floor((min + max) / 2);

//     let nextNum = min;
//     const str = Array.from({ length: mid - min + 1 }, (_, i) => nextNum++).join(
//       ''
//     );

//     if (str.length + cnt < k) {
//       cnt += str.length;
//       min = mid + 1;
//     } else {
//       answer = str[k - cnt - 1];
//       break;
//     }
//   }

//   return answer;
// };

// console.log(solution(N, k));

// 메모리 초과1
// https://www.acmicpc.net/problem/1790

// let fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
// let [N, k] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

// const solution = () => {
//   const str = Array.from({ length: N }, (_, i) => i + 1).join('');

//   if (str.length < k) return -1;

//   return str[k - 1];
// };

// console.log(solution(N, k));
