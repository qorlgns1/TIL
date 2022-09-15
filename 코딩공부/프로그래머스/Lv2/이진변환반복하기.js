// function solution(s) {
//   let str = s;
//   let removeCount = 0;
//   let change = 0;
//   while (true) {
//     change++;
//     removeCount += str.split('').reduce((acc, cur) => {
//       if (cur === '0') {
//         return acc + 1;
//       }

//       return acc;
//     }, 0);

//     str = str.replace(/0/g, '');
//     str = str.length.toString(2);

//     if (str.length === 1) {
//       return [change, removeCount];
//     }
//   }
// }

function solution(s) {
  const answer = [0, 0];
  let str = s;
  while (str.length > 1) {
    answer[0]++;
    answer[1] += str.match(/0/g)?.length || 0;
    str = str.replace(/0/g, '');
    str = str.length.toString(2);
  }

  return answer;
}

// console.log(solution('110010101001'));
console.log(solution('01110'));
