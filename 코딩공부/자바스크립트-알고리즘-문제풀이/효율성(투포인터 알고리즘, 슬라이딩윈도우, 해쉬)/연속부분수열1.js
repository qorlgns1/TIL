//case1 시간복잡도 O(n^2)
// const solution = (chkNum, arr) => {
//   let p1 = 0;
//   let result = [];

//   while (p1 < arr.length) {
//     let sum = 0;
//     let p2 = p1;
//     let tempArr = [];
//     for (let i = p2; i < arr.length; i++) {
//       sum += arr[i];
//       tempArr.push(arr[i]);

//       if (sum > chkNum) {
//         break;
//       } else if (sum === chkNum) {
//         result.push(tempArr);
//         break;
//       }
//     }

//     p1++;
//   }

//   console.log(result.length);
// };

// //solution(합이되는지 확인하는 수, 배열)
// solution(6, [1, 2, 1, 3, 1, 1, 1, 2]);

// case2 시간복잡도 O(n)
const solution = (chkNum, arr) => {
  let lt = 0;
  let rt = 1;
  let cnt = 0;

  let sum = arr[0];
  while (rt < arr.length) {
    if (sum === chkNum) {
      sum -= arr[lt++];
      cnt++;
    } else if (sum > chkNum) {
      sum -= arr[lt++];
    } else {
      sum += arr[rt++];
    }
  }
  console.log(cnt);
};

//solution(합이되는지 확인하는 수, 배열)
solution(6, [1, 2, 1, 2, 1, 1, 1, 2]);
