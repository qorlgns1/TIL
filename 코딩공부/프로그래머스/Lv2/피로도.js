// function solution(k, dungeons) {
//   let answer = 0;
//   let energy = k;

//   dungeons.sort((a, b) => (b[0] === a[0] ? a[1] - b[1] : b[0] - a[0]));

//   for (let i = 0; i < dungeons.length; i++) {
//     const [최소필요피로도, 소모피로도] = dungeons[i];

//     if (최소필요피로도 > energy) {
//       continue;
//     }

//     energy -= 소모피로도;
//     answer++;
//   }

//   return answer;
// }

// function solution(k, dungeons) {
//   let answer = 0;

//   dungeons.sort((a, b) => (b[0] === a[0] ? a[1] - b[1] : b[0] - a[0]));
//   const ch = new Array(dungeons.length).fill(0);

//   function DFS(L, energy, last) {
//     if (energy <= 0 || last) {
//       answer = Math.max(answer, L);
//     } else {
//       for (let i = 0; i < dungeons.length; i++) {
//         const [최소필요피로도, 소모피로도] = dungeons[i];

//         if (최소필요피로도 <= energy && ch[i] === 0) {
//           ch[i] = 1;
//           DFS(L + 1, energy - 소모피로도, false);
//           ch[i] = 0;
//         }

//         if (i === dungeons.length - 1) {
//           DFS(L, energy, true);
//         }
//       }
//     }
//   }

//   DFS(0, k, false);
//   return answer;
// }

function solution(k, dungeons) {
  let answer = 0;
  const ch = new Array(dungeons.length).fill(0);

  function DFS(L, energy, last) {
    if (last) {
      answer = Math.max(answer, L);
    } else {
      for (let i = 0; i < dungeons.length; i++) {
        const [최소필요피로도, 소모피로도] = dungeons[i];

        if (최소필요피로도 <= energy && ch[i] === 0) {
          ch[i] = 1;
          DFS(L + 1, energy - 소모피로도, false);
          ch[i] = 0;
        }

        if (i === dungeons.length - 1) {
          DFS(L, energy, true);
        }
      }
    }
  }

  DFS(0, k, false);
  return answer;
}

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
);
