// 내가 푼 정답
// function solution(n) {
//   let answer = 0;
//   let lt = 1;
//   let rt = 2;
//   let total = 3;

//   while (true) {
//     if (total === n) {
//       answer++;
//     } else if (total > n) {
//       while (total > n) {
//         total -= lt++;
//       }

//       if (Math.ceil(n / 2) < rt) {
//         break;
//       } else {
//         continue;
//       }
//     }

//     total += ++rt;
//   }

//   return answer + 1; // 마지막 자기 숫자를 더하기위해 +1을 함
// }

// 다른사람 정답
function solution(n) {
  let answer = 0;
  let d = 1;
  while (n > 0) {
    // console.log(n % d);
    if (n % d === 0) {
      answer += 1;
    }
    n -= d;
    // console.log(n);
    d += 1;
    // console.log(d);
  }

  return answer;
}

console.log(solution(15));
