function solution(arr1, arr2) {
  var answer = [];

  for (let i = 0; i < arr1.length; i++) {
    let temp = [];
    for (let j = 0; j < arr2[0].length; j++) {
      let num = 0;
      for (let k = 0; k < arr2.length; k++) {
        num += arr1[i][k] * arr2[k][j];
      }
      temp.push(num);
    }
    answer.push(temp);
  }

  return answer;
}

console.log(
  solution(
    [
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
    ],
    [
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
    ]
  )
);

// console.log(
//   solution(
//     [
//       [1, 4],
//       [3, 2],
//       [4, 1],
//     ],
//     [
//       [3, 3],
//       [3, 3],
//     ]
//   )
// );

// console.log(
//   solution(
//     [
//       [2, 3, 2],
//       [4, 2, 4],
//       [3, 1, 4],
//     ],
//     [
//       [5, 4, 3],
//       [2, 4, 1],
//       [3, 1, 1],
//     ]
//   )
// );
