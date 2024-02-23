// function solution(name) {
//   // const str = [...name].filter((str) => str !== 'A');
//   var answer = 0;
//   const alphabetArr = [
//     'A',
//     'B',
//     'C',
//     'D',
//     'E',
//     'F',
//     'G',
//     'H',
//     'I',
//     'J',
//     'K',
//     'L',
//     'M',
//     'N',
//     'O',
//     'P',
//     'Q',
//     'R',
//     'S',
//     'T',
//     'U',
//     'V',
//     'W',
//     'X',
//     'Y',
//     'Z',
//   ];

//   for (let i = 0; i < name.length; i++) {
//     if (name[i] !== 'A') {
//       const a = alphabetArr.findIndex((s) => s === name[i]);
//       answer += Math.min(a, Math.abs(a - 26));
//     }

//     answer++;
//   }

//   return answer - 1;
// }

function solution(name) {
  let answer = 0;
  let min_move = name.length - 1;

  [...name].map((n, i) => {
    answer += Math.min(n.charCodeAt() - 65, 91 - n.charCodeAt());
    let idx = i + 1;

    // 연속되는 A의 개수 count
    while (idx < name.length && name[idx] === 'A') {
      idx++;
    }

    min_move = Math.min(
      min_move,
      i * 2 + name.length - idx,
      i + 2 * (name.length - idx)
    );
  });

  return answer + min_move;
}

const name = ['AAAABAAAAC'];

for (let i = 0; i < name.length; i++) {
  console.log(solution(name[i]));
}
