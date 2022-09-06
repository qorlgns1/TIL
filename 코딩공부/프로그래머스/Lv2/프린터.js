// function solution(priorities, location) {
//   let answer = 0;
//   const sameNumIndex = priorities.findIndex((num, i) => {
//     return priorities[location] === num && i !== location;
//   });

//   if (sameNumIndex === -1) {
//     answer = priorities.filter((num) => num > priorities[location]).length;
//     return answer + 1;
//   }

//   const removeDuplPriorities = [...new Set(priorities)].sort((a, b) => b - a);
//   let selectIndex = 0;
//   let index = priorities.findIndex(
//     (num) => num === removeDuplPriorities[selectIndex]
//   );

//   while (true) {
//     if (
//       priorities[location] <= priorities[index % priorities.length] &&
//       location !== index % priorities.length
//     ) {
//       priorities[index % priorities.length] = 0;
//       index++;
//       answer++;
//     } else {
//       return answer + 1;
//     }
//   }
// }

function solution(priorities, location) {
  let answer = 1;
  while (true) {
    const print = priorities.shift();
    const biggerPrintNumIndex = priorities.findIndex((num) => num > print);

    if (biggerPrintNumIndex > -1) {
      priorities.push(print);
    } else if( print === biggerPrintNumIndex == location) {
    }else {
      return answer;
    }
  }
}

// console.log(solution([7, 6, 5, 4, 3, 2, 1], 3));
// console.log(solution([1, 2, 3, 4, 5, 6, 7], 3));
// console.log(solution([2, 1, 1, 3, 2], 1));
console.log(solution([1, 1, 9, 1, 1, 1], 0));
