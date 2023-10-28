// 오답
// function solution(begin, target, words) {
//   let answer = 0;

//   if (!words.includes(target)) {
//     return answer;
//   }

//   for (let i = 0; i < words.length; i++) {
//     let ch = 0;
//     for (let j = 0; j < begin.length; j++) {
//       if (begin[j] !== words[i][j]) {
//         ch++;
//       }

//       if (ch > 1) {
//         return 0;
//       }
//     }

//     begin = words[i];
//     answer++;
//     ch = 0;

//     for (let j = 0; j < begin.length; j++) {
//       if (begin[j] !== target[j]) {
//         ch++;
//       }

//       if (ch > 1) {
//         break;
//       }
//     }

//     if (ch < 2) {
//       return answer + 1;
//     }
//   }

//   return 0;
// }

// 정답이지만 불만족 코드
// function solution(begin, target, words) {
//   if (!words.includes(target)) {
//     return 0;
//   }

//   let answer = Number.MAX_SAFE_INTEGER;
//   let isFind = false;

//   function backtrack(word, ch) {
//     if (word === target) {
//       isFind = true;
//       answer = Math.min(ch.filter((v) => v === 1).length, answer);
//       return;
//     }

//     for (let i = 0; i < words.length; i++) {
//       if (
//         ch[i] !== 1 &&
//         [...words[i]].filter((char, i) => char === word[i]).length ===
//           begin.length - 1
//       ) {
//         ch[i] = 1;

//         backtrack(words[i], ch);
//         ch[i] = 0;
//       }
//     }
//   }

//   for (let i = 0; i < words.length; i++) {
//     const word = words[i];

//     if (
//       [...word].filter((char, i) => char === begin[i]).length ===
//       begin.length - 1
//     ) {
//       const ch = new Array(words.length).fill(0);
//       ch[i] = 1;

//       backtrack(word, ch);
//     }
//   }

//   return isFind ? answer : 0;
// }

// 깔끔한 정답
function solution(begin, target, words) {
  let answer = 0;
  let visited = [];
  let queue = [];

  if (!words.includes(target)) return 0; //words배열에 target이 없으면 0을 반환

  queue.push([begin, answer]); //일단 queue에 [시작단어, 변경횟수]를 배열형태로 넣는다.

  while (queue) {
    let [v, cnt] = queue.shift(); //queue의 맨 왼쪽 값을 꺼낸다.

    if (v === target) {
      //꺼낸값의 v가 맞으면 cnt는 횟수 이므로 cnt를 return한다.
      return cnt;
    }

    words.forEach((word) => {
      let notEqual = 0; //다른갯수를 구하기위해 변수를 선언한다.

      if (visited.includes(word)) return; //방문했던 단어면 pass

      for (let i = 0; i < word.length; i++) {
        if (word[i] !== v[i]) notEqual++; //word를 반복하면서 다른 알파벳의 갯수를 체크한다
      }

      if (notEqual === 1) {
        //만약 다른게 1개라면
        queue.push([word, ++cnt]); //queue에 [단어, 횟수] 형태로 넣는다.
        //처음으로 따지면 hit -> hot이 되었을 때가 1이 된다.
        visited.push(word); //방문처리를 해준다.
      }
    });
  }

  return answer;
}

const begin = ["hit", "hit"];
const target = ["cog", "cog"];
const words = [
  ["hot", "dot", "dog", "lot", "log", "cog"],
  ["hot", "dot", "dog", "lot", "log"],
];

for (let i = 0; i < begin.length; i++) {
  console.log(solution(begin[i], target[i], words[i]));
}
