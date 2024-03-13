// https://www.acmicpc.net/problem/13549

let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
let [N, K] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);
// let arr = fs
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split('\n')
//   .map((a) => a.split(' ').map(Number));

function solution(N, K) {
  let answer = 0;
  const MAX_LEN = 100000;
  const ch = new Array(MAX_LEN + 1).fill(0);
  ch[N] = 1;
  const queue = [[N, 0]];

  while (queue.length) {
    const [x, cnt] = queue.shift();

    if (x === K) {
      answer = cnt;
      break;
    }

    if (x * 2 <= MAX_LEN && !ch[x * 2]) {
      ch[x * 2] = 1;
      queue.unshift([x * 2, cnt]);
    }

    if (x + 1 <= MAX_LEN && !ch[x + 1]) {
      ch[x + 1] = 1;
      queue.push([x + 1, cnt + 1]);
    }

    if (x - 1 >= 0 && !ch[x - 1]) {
      ch[x - 1] = 1;
      queue.push([x - 1, cnt + 1]);
    }
  }

  return answer;
}

// for (let i = 0; i < arr.length; i++) {
//   const [N, K] = arr[i];
// }
console.log(solution(N, K));

// 어떤 경로로 이동하는지 확인하기
// let fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
// let [N, K] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

// function solution(N, K) {
//   if (N > K) {
//     return N - K;
//   }

//   if (N === 0 && K === 0) {
//     return 0;
//   }

//   let answer = 0;
//   const MAX_LEN = 100000;
//   const ch = new Array(MAX_LEN + 1).fill(0);
//   ch[N] = 1;
//   const queue = [[N, 0, [N]]];
//   let answer_arr = [];

//   while (queue.length) {
//     const [x, cnt, arr] = queue.shift();

//     if (x === K) {
//       answer = cnt;
//       answer_arr = arr;
//       break;
//     }

//     // 함수 맨 처음 if문에서 처리했기 때문에 뒤로 가는 경우는 없음
//     if (x + 1 <= MAX_LEN && !ch[x + 1]) {
//       ch[x + 1] = 1;
//       queue.push([x + 1, cnt + 1, [...arr, x + 1]]);
//     }

//     if (x - 1 >= 0 && !ch[x - 1]) {
//       ch[x - 1] = 1;
//       queue.push([x - 1, cnt + 1, [...arr, x - 1]]);
//     }

//     let newX = x * 2;
//     while (newX <= MAX_LEN && newX >= 0) {
//       if (!ch[newX]) {
//         ch[newX] = 1;
//         queue.unshift([newX, cnt, [...arr, newX]]);
//       }

//       if (newX <= 0) break;
//       newX = newX * 2;
//     }
//   }

//   console.log(answer_arr);

//   return answer;
// }

// console.log(solution(N, K));

// -------------------------------------------------
// 다른 사람 정답

// const sol = (input) => {
//   const [N, K] = input.split(' ').map(Number);
//   const visit = Array.from({ length: 100100 }, () => 0);

//   function bfs(N) {
//     const queue = [];
//     queue.push([N, 0, []]);
//     visit[N] = 1;
//     while (queue.length) {
//       const [cur, time, arr] = queue.shift();
//       if (cur === K) return arr;
//       for (next of [cur * 2, cur - 1, cur + 1]) {
//         if (!visit[next] && next >= 0 && next <= 100000) {
//           visit[next] = 1;
//           if (next == cur * 2) {
//             queue.unshift([next, time, [...arr, next]]); // 2X로 이동할 때는 시간을 증가시키지 않고, 우선순위를 반영하여 큐의 맨 앞에 넣어준다.
//           } else {
//             queue.push([next, time + 1, [...arr, next]]); // X-1, X+1로 이동할 때는 시간을 증가시키고, 큐에 순서대로 넣어준다.
//           }
//         }
//       }
//     }
//   }
//   return bfs(N);
// };

// require('readline')
//   .createInterface(process.stdin, process.stdout)
//   .on('line', (line) => {
//     console.log(sol(line));
//   })
//   .on('close', () => {
//     process.exit();
//   });
