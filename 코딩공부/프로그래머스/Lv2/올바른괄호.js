// 오답1
// function solution(s) {
//   if(s[0] === ')') {
//       return false;
//   }

//   if (s.match(/\(\)/g)?.length === s.length / 2) {
//     return true;
//   }

//   let beforeStr = s;
//   while (true) {
//     const replacedStr = beforeStr.replace(/\(\)/g, '');
//     if (!replacedStr.length) {
//       return true;
//     }

//     if (replacedStr === beforeStr) {
//       return false;
//     }

//     beforeStr = replacedStr;
//   }
// }

// 오답2
// function solution(s) {
//   if (s[0] === ')') {
//     return false;
//   }

//   let left = s.match(/\(/g)?.length || 0;
//   let right = s.match(/\)/g)?.length || 0;

//   return left === right ? true : false;
// }

// 오답3
// function solution(s) {
//   if (s[0] === ')') {
//     return false;
//   }

//   let left = s.match(/\(/g)?.length || 0;
//   let right = s.match(/\)/g)?.length || 0;

//   if (left === right) {
//     return true;
//   }

//   let beforeStr = s;
//   while (true) {
//     const replacedStr = beforeStr.replace(/\(\)/g, '');
//     if (!replacedStr.length) {
//       return true;
//     }

//     if (replacedStr === beforeStr) {
//       return false;
//     }

//     beforeStr = replacedStr;
//   }
// }

function solution(s) {
  let left = 0;

  for (let i = 0; i < s.length; i++) {
    s[i] === '(' ? left++ : left--;

    if (left < 0) {
      return false;
    }
  }

  return left === 0 ? true : false;
}

console.log(solution('())('));
