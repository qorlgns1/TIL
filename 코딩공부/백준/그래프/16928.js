// // https://www.acmicpc.net/problem/16928
// https://www.notion.so/034857423410449f87dc46d16ce6f7ae

// 다른 사람 답변을 기반으로 혼자 다시 풀어보기
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
let [[N, M], ...arr] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

const solution = (N, M, arr) => {
  const BOARD_MAX_LEN = 100;

  // 해당 위치에 도착하면 이동하게 될 위치가 담긴 배열
  const move = Array.from({ length: BOARD_MAX_LEN + 1 }, (_, i) => i);
  arr.forEach(([s, d]) => {
    move[s] = d;
  });

  // 현 위치에서 주사위를 던져(1 ~ 6) 갈 수 있는 거리가 담긴 배열
  const dice = Array.from({ length: 6 }, (_, i) => i + 1);
  const graph = Array.from({ length: BOARD_MAX_LEN + 1 }, (_, now) => {
    return dice
      .map((next) => move[now + next])
      .filter((next) => next <= 100 && next >= 0);
  });
  const ch = Array.from({ length: 6 }, () => false);
  const NOW = 1;
  ch[NOW] = true;
  // [현 위치, 방문횟수]
  const queue = [[NOW, 0]];

  while (queue.length) {
    const [now, cnt] = queue.shift();

    if (now === BOARD_MAX_LEN) {
      return cnt;
    }

    graph[now].forEach((next) => {
      if (!ch[next]) {
        ch[next] = true;
        queue.push([next, cnt + 1]);
      }
    });
  }
};

console.log(solution(N, M, arr));

// 내가 첫번째 푼 오답
// let fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
// let [[N, M], ...arr] = fs
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split('\n')
//   .map((v) => v.split(' ').map(Number));

// const solution = (N, M, arr) => {
//   // const 사다리_정보 = arr.slice(0, N);
//   // const 뱀_정보 = arr.slice(N);

//   // console.log(사다리_정보);
//   // console.log(뱀_정보);

//   // [방문횟수, 체크배열, 해당 인덱스, 현재 위치]
//   const queue = [];
//   const answer = [];
//   for (let i = 0; i < arr.length; i++) {
//     const ch = new Array(N + M).fill(0);
//     ch[i] = 1;

//     const [s, d] = arr[i];
//     queue.push([Math.ceil((s - 1) / 6), ch, i, d]);
//   }

//   while (queue.length) {
//     const [cnt, ch, index, now] = queue.shift();

//     if (now === 100) {
//       answer.push(cnt);
//     }

//     for (let i = 0; i < ch.length; i++) {
//       if (!ch[i]) {
//         ch[i] = 1;
//         const [s, d] = arr[index];
//         const nextCnt = Math.ceil((s - now) / 6);
//         if (nextCnt < 1) continue;
//         if (nextCnt >= 100) {
//           queue.push([cnt + nextCnt, ch, i, 100]);
//         } else {
//           queue.push([cnt + nextCnt, ch, i, d]);
//         }
//       }
//     }
//   }

//   return answer;
// };

// console.log(solution(N, M, arr));

// 다른 사람 정답
// const solve = (input) => {
//   input.shift();
//   const temp = [...new Array(101)].map((_, i) => i);
//   for (const i of input) {
//     const [start, end] = i.split(' ').map((v) => +v);
//     temp[start] = end;
//   }
//   const graph = [...new Array(101)].map((_, i) =>
//     [...new Array(6)].map((_, ii) => temp[i + ii + 1]).filter((v) => v <= 100)
//   );
//   console.log(BFS(1, graph));
// };

// const BFS = (start, graph) => {
//   const visited = new Array(101).fill(false);
//   const queue = [[start, 0]];
//   while (queue.length) {
//     const [node, count] = queue.shift();
//     if (node === 100) return count;
//     if (!visited[node]) {
//       visited[node] = true;
//       queue.push(...graph[node].map((v) => [v, count + 1]));
//     }
//   }
// };

// const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
// const input = require('fs')
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split('\n');
// solve(input);
