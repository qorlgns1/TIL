// N개의 자연수로 구성된 집합을 두개의 부분집합으로 나눌 때 합이 같은것이 있으면 YES를 출력 없으면 NO 출력
// const solution = (arr) => {
//   let result = "NO";
//   const total = arr.reduce((a, b) => a + b, 0);
//   let flag = 0;
//   const n = arr.length;

//   const DFS = (L, sum) => {
//     if (flag) {
//       return;
//     }
//     if (L === n) {
//       if (total - sum === sum) {
//         result = "YES";
//         flag = 1;
//       }
//     } else {
//       DFS(L + 1, sum + arr[L]);
//       DFS(L + 1, sum);
//     }
//   };

//   DFS(0, 0);

//   return result;
// };

function solution(arr) {
  const ch = new Array(arr.length).fill(0);
  const answer = [];
  const total = arr.reduce((acc, cur) => acc + cur, 0);

  let flag = false;

  function DFS(i) {
    if (flag) {
      return;
    }

    if (i >= arr.length) {
      // console.log(ch.join(' '));

      let sum = 0;
      ch.forEach((v, i) => {
        if (ch[i] > 0) {
          sum += arr[i];
        }
      });

      if (total - sum === sum) {
        // console.log(ch);
        flag = true;
      }
    } else {
      ch[i] = 1;
      DFS(i + 1);
      ch[i] = 0;
      DFS(i + 1);
    }
  }

  DFS(0);
  return answer;
}

// console.log(solution([1, 3, 5, 6, 7, 10]));

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
