// 오답
// function solution(arr) {
//   let times = 1;

//   for (let i = 2; i < Math.sqrt(Math.max(...arr)); i++) {
//     let flag = arr.some((n) => n % i !== 0);
//     if (!flag) {
//       arr = arr.map((n) => n / i);
//       times *= i;
//       i--;
//     }
//   }

//   return arr.reduce((acc, cur) => acc * cur, times);
// }

// function 최소공배수구하기(n1, n2) {
//   let times = 1;
//   let arr = [n1, n2];
//   for (let i = 2; i <= Math.ceil(Math.sqrt(Math.max(...arr))); i++) {
//     let flag = arr.some((n) => n % i !== 0);
//     if (!flag) {
//       arr = arr.map((n) => n / i);
//       times *= i;
//       i--;
//     }
//   }
//   return times * arr[0] * arr[1];
// }

// 내가 푼 정답
// function 최소공배수구하기(n1, n2) {
//   let times = 1;
//   let arr = [n1, n2];

//   let i = 2;
//   while (i <= Math.ceil(Math.sqrt(Math.max(...arr)))) {
//     let flag = arr.some((n) => n % i !== 0);
//     if (!flag) {
//       arr = arr.map((n) => n / i);
//       times *= i;
//     } else {
//       i++;
//     }
//   }

//   return times * arr[0] * arr[1];
// }

// function solution(arr) {
//   let answer = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     answer = 최소공배수구하기(answer, arr[i]);
//   }

//   return answer;
// }

// --------------------------------------------------

// 다른사람 정답
// function nlcm(num) {
//   return num.reduce((a, b) => (a * b) / gcd(a, b));
// }

// function gcd(a, b) {
//   return a % b ? gcd(b, a % b) : b;
// }

// console.log(nlcm([3, 6, 8]));

// --------------------------------------------------

// 내가 푼 정답
function solution(arr) {
  let i = 2;
  let times = 1;
  while (i <= Math.max(...arr)) {
    let flag = arr.some((n) => n % i === 0);
    if (flag) {
      arr = arr.map((n) => (n % i === 0 ? n / i : n));
      times *= i;
    } else {
      i++;
    }
  }

  return arr.reduce((acc, cur) => acc * cur, times);
}

console.log(solution([7, 7]));
