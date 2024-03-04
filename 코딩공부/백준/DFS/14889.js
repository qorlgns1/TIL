// https://www.acmicpc.net/problem/14889

// -----------------------

// 문제 해석
// BOJ를 운영하는 회사 답게 사람에게 번호를 1부터 N까지로 배정
// 아래와 같은 능력치를 조사
// 능력치 Sij는 i번 사람과 j번 사람이 같은 팀에 속했을 때, 팀에 더해지는 능력치
// 팀의 능력치는 팀에 속한 모든 쌍의 능력치 Sij의 합
// Sij는 Sji와 다를 수도 있으며
// i번 사람과 j번 사람이 같은 팀에 속했을 때, 팀에 더해지는 능력치는 Sij와 Sji이다

// -----------------------

// 다른사람 풀이와 거의 비슷한데, 통과를 못해서 질문 남김
// https://www.acmicpc.net/board/view/137910

// 다른사람이 푼 정답
const sol = (input) => {
  const N = +input[0];
  const halfN = N / 2;
  const stats = input.slice(1).map((str) => str.split(' ').map(Number));

  const check = new Array(N).fill(0);
  let min = Number.MAX_SAFE_INTEGER;
  function dfs(L, K) {
    if (L === halfN) {
      // 스타트팀에 N/2 명이 뽑혔다면
      const sTeam = [];
      const lTeam = [];
      let sSum = (lSum = 0);
      for (let i = 0; i < N; i++) {
        if (check[i]) sTeam.push(i);
        // 체크 배열은 스타트 팀에 넣어주고, 체크 배열에 없으면 링크 팀에 넣어준다.
        else lTeam.push(i);
      }
      for (let i = 0; i < halfN; i++) {
        for (let j = i + 1; j < halfN; j++) {
          // (i,j), (j,i) 쌍을 계속 더해준다.
          sSum = sSum + stats[sTeam[i]][sTeam[j]] + stats[sTeam[j]][sTeam[i]];
          lSum = lSum + stats[lTeam[i]][lTeam[j]] + stats[lTeam[j]][lTeam[i]];
        }
      }
      min = Math.min(min, Math.abs(sSum - lSum));
      return;
    }

    for (let i = K; i < N; i++) {
      // 체크 배열을 스타트 팀 구성에 사용한다.
      check[i] = 1;
      dfs(L + 1, i + 1);
      check[i] = 0;
    }
  }
  dfs(0, 0);
  return min;
};

// 백준에서 입력을 받는 코드
const input = [];
require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    input.push(line);
  })
  .on('close', () => {
    console.log(sol(input));
    process.exit();
  });

// -----------------------

// 시간초과로 통과하지 못한 코드
// let fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
// let [[N], ...arr] = fs
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split('\n')
//   .map((input) => input.split(' ').map(Number));

// let answer = Number.MAX_SAFE_INTEGER;
// const ch = new Array(Number(N)).fill(0);

// function DFS(cnt, startSearchIndex) {
//   if (N / 2 === cnt) {
//     const team1 = [];
//     const team2 = [];

//     ch.forEach((c, i) => {
//       c === 1 ? team1.push(i) : team2.push(i);
//     });

//     let sum1 = 0;
//     let sum2 = 0;
//     for (let i = 0; i < team1.length; i++) {
//       for (let j = i + 1; j < team1.length; j++) {
//         sum1 = sum1 + arr[team1[i]][team1[j]] + arr[team1[j]][team1[i]];
//         sum2 = sum2 + arr[team2[i]][team2[j]] + arr[team2[j]][team2[i]];
//       }
//     }

//     answer = Math.min(answer, Math.abs(sum2 - sum1));
//   } else {
//     for (let i = startSearchIndex; i < arr.length; i++) {
//       ch[i] = 1;
//       DFS(cnt + 1, startSearchIndex + 1);
//       ch[i] = 0;
//     }
//   }
// }

// DFS(0, 0);

// console.log(answer);
