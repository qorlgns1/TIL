// https://school.programmers.co.kr/learn/courses/30/lessons/161990

function solution(wallpaper) {
  var answer = [];

  for (let i = 0; i < wallpaper.length; i++) {
    const row = wallpaper[i];
    const shop = row.split("").find((el) => el === "#");
    if (shop) {
      answer.push(i);
      break;
    }
  }

  for (let i = 0; i < wallpaper[0].length; i++) {
    let find = false;
    for (let j = 0; j < wallpaper.length; j++) {
      const col = wallpaper[j][i];
      if (col === "#") {
        answer.push(i);
        find = true;
        break;
      }
    }
    if (find) break;
  }

  for (let i = wallpaper.length - 1; i >= 0; i--) {
    const row = wallpaper[i];
    const shop = row.split("").find((el) => el === "#");
    if (shop) {
      answer.push(i + 1);
      break;
    }
  }

  for (let i = wallpaper[0].length - 1; i >= 0; i--) {
    let find = false;
    for (let j = wallpaper.length - 1; j >= 0; j--) {
      const col = wallpaper[j][i];
      if (col === "#") {
        answer.push(i + 1);
        find = true;
        break;
      }
    }
    if (find) break;
  }

  return answer;
}

// 다른사람 답변
// function solution(wallpaper) {
//   let [x1, y1, x2, y2] = [wallpaper.length, wallpaper[0].length, 0, 0];
//   // x1 => min i
//   // x2 => max i
//   // y1 => min idx
//   // y2 => max idx
//   wallpaper.forEach((paper, i) => {
//     if (paper.includes("#")) {
//       x1 = Math.min(x1, i);
//       y1 = Math.min(y1, paper.indexOf("#"));
//       x2 = Math.max(x2, i);
//       y2 = Math.max(y2, paper.lastIndexOf("#"));
//     }
//   });
//   return [x1, y1, x2 + 1, y2 + 1];
// }

const wallpaper = [
  ".##...##.",
  "#..#.#..#",
  "#...#...#",
  ".#.....#.",
  "..#...#..",
  "...#.#...",
  "....#....",
];
console.log(solution(wallpaper));
