// 시간초과 실패
// function solution(s) {
//   let i = 1;

//   let 비교문자 = '';
//   while (true) {
//     if (s[i - 1] !== s[i]) {
//       비교문자 += s[i - 1];
//       i += 1;
//     } else {
//       i += 2;
//     }

//     if (i > s.length) {
//       if (s.length === 0) {
//         return 1;
//       }

//       if (비교문자 === s) {
//         return 0;
//       }

//       i = 1;
//       s = 비교문자;
//       비교문자 = '';
//     }
//   }
// }

function solution(s) {
  const stack = [s[0]];

  for (let i = 1; i < s.length; i++) {
    if (stack.length > 0 && stack[stack.length - 1] === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return !stack.length ? 1 : 0;
}

console.log(solution('baabaa'));
