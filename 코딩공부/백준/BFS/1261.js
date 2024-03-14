// https://www.acmicpc.net/problem/1261
//  기존 풀이를 이용하여 나와있는 모든 테스트케이스를 찾아 돌려봤고,
// 모두 통과했지만, 백준에서 런타임에러가 발생한다…ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';

let [MN, ...arr] = fs.readFileSync(0, 'utf-8').trim().split('\n');

const [M, N] = MN.split(' ').map((n) => Number(n) - 1);
arr = arr.map((v) => v.split('').map((n) => parseInt(n)));

// 상하좌우 x,y
const move = [
  [0, -1],
  [0, 1],
  [-1, 0],
  [1, 0],
];

// 방문은 숫자 2로 처리
arr[0][0] = 2;
// [x, y, 부순 벽 개수, 방문한 곳]
const queue = [[0, 0, 0, arr]];
let answer = 0;

while (queue.length) {
  const [x, y, cnt, visited] = queue.shift();

  // M: 가로, N: 세로
  if (x === M && y === N) {
    answer = cnt;
    break;
  }

  move.forEach(([nextX, nextY]) => {
    if (
      x + nextX >= 0 &&
      x + nextX <= M &&
      y + nextY >= 0 &&
      y + nextY <= N &&
      visited[y + nextY][x + nextX] !== 2
    ) {
      // 빈 방
      const newVisited = structuredClone(visited);
      if (visited[y + nextY][x + nextX] === 0) {
        newVisited[y + nextY][x + nextX] = 2;
        queue.unshift([x + nextX, y + nextY, cnt, newVisited]);
      } else {
        newVisited[y + nextY][x + nextX] = 2;
        queue.push([x + nextX, y + nextY, cnt + 1, newVisited]);
      }
    }
  });
}

console.log(answer);

// --------------------------------------

// 다른 사람 정답
// const sol = (input) => {
//   const [M, N] = input[0].split(' ').map(Number); // M,N 순서로 데이터가 주어진다.
//   input = input.slice(1);
//   const adjM = input.map((row) => row.split('').map(Number));

//   function bfs(sx, sy) {
//     const deque = [];
//     deque.push([sx, sy, 0]);
//     const check = Array.from({ length: N }, () => new Array(M).fill(0));
//     check[sx][sy] = 1;
//     const dx = [-1, 0, 1, 0];
//     const dy = [0, 1, 0, -1];
//     while (deque.length) {
//       const [x, y, cnt] = deque.shift();
//       if (x === N - 1 && y === M - 1) return cnt; // (N,M) 위치에 도달하면 종료한다.

//       for (let i = 0; i < 4; i++) {
//         // 현재 위치 (x,y)에서 상하좌우 한번씩 이동을 탐색한다.
//         const [nx, ny] = [x + dx[i], y + dy[i]];
//         if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
//         if (check[nx][ny]) continue;
//         check[nx][ny] = 1;
//         if (adjM[nx][ny]) {
//           adjM[nx][ny] = 0;
//           deque.push([nx, ny, cnt + 1]);
//         } else {
//           deque.unshift([nx, ny, cnt]); // 벽이 없어서 바로 이동하는 경우를 우선적으로 처리하도록 맨 앞에 넣어준다.
//         }
//       }
//     }
//   }
//   return bfs(0, 0);
// };

// // 백준에서 입력을 받는 코드
// const input = [];
// require('readline')
//   .createInterface(process.stdin, process.stdout)
//   .on('line', (line) => {
//     input.push(line);
//   })
//   .on('close', () => {
//     console.log(sol(input));
//     process.exit();
//   });
