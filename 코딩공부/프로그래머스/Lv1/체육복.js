// function solution(n, lost, reserve) {
//   let result = n - lost.length;
//   let newLost = [...lost];
//   let newReserve = [...reserve];

//   newLost.sort((a, b) => a - b);
//   newReserve.sort((a, b) => a - b);

//   let borrow = [];

//   newReserve = newReserve.filter((num) => {
//     if (newLost.includes(num)) {
//       borrow.push(newLost[newLost.indexOf(num)]);
//       result++;
//     }

//     return !newLost.includes(num);
//   });

//   newLost = newLost.filter((num) => !borrow.includes(num));

//   for (let i = 0; i < newLost.length; i++) {
//     const minNum = newLost[i] - 1;
//     const maxNum = newLost[i] + 1;

//     const newReserveMinNumIdx = newReserve.indexOf(minNum);
//     if (newReserveMinNumIdx > -1) {
//       const newReserveMinNumValue = newReserve[newReserveMinNumIdx];
//       if (!borrow.includes(newReserveMinNumValue)) {
//         borrow.push(newReserveMinNumValue);
//         result++;
//         continue;
//       }
//     }

//     const newReserveMaxNumIdx = newReserve.indexOf(maxNum);
//     if (newReserveMaxNumIdx > -1) {
//       const newReserveMaxNumValue = newReserve[newReserveMaxNumIdx];
//       if (!borrow.includes(newReserveMaxNumValue)) {
//         borrow.push(newReserveMaxNumValue);
//         result++;
//       }
//     }
//   }

//   return result;
// }

function solution(n, lost, reserve) {
  const arr = new Array(n).fill(1);

  lost.map((num) => (arr[num - 1] -= 1));
  reserve.map((num) => (arr[num - 1] += 1));

  for (let i = 0; i < arr.length; i++) {
    if (!arr[i] && arr[i - 1] === 2) {
      arr[i] = 1;
      arr[i - 1] = 1;
      continue;
    }

    if (!arr[i] && arr[i + 1] === 2) {
      arr[i] = 1;
      arr[i + 1] = 1;
    }
  }

  return arr.reduce((acc, cur) => (cur ? acc + 1 : acc), 0);
}

const n = 5;
const lost = [2, 4];
const reserve = [1, 3, 5];

console.log(solution(n, lost, reserve));
