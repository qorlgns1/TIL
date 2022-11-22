// 미해결

// function solution(arr) {
//   const dy = [1];

//   for (let i = 1; i < arr.length; i++) {
//     const front = arr.slice(0, i);
//     const max = front.reduce((a, c) => {
//       if (arr[i] > c && a <= c) {
//         return c;
//       }
//       return a;
//     }, -1);

//     const lastIndex = front.lastIndexOf(max);

//     if (lastIndex < 0) {
//       dy.push(1);
//     } else {
//       dy.push(dy[lastIndex] + 1);
//     }
//   }

//   return Math.max(...dy);
// }

function solution(arr) {
  const dy = new Array(arr.length).fill(0);
  dy[0] = 1;

  for (let i = 1; i < arr.length; i++) {
    let maxCount = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] < arr[i] && dy[j] > maxCount) {
        maxCount = dy[j];
      }
    }

    dy[i] = maxCount + 1;
  }

  return Math.max(...dy);
}

// console.log(solution([5, 3, 7, 8, 6, 2, 9, 4]));
console.log(solution([2, 7, 5, 8, 6, 4, 7, 12, 3]));

// [2, 7, 5, 8, 6, 4, 7, 12, 3]
// [1, 2, 2, 3, 3, 2, 4,  5, 2]
