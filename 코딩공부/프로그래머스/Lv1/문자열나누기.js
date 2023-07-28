// 오답
// function solution(s) {
//   let answer = 0;
//   let map = new Map();
//   let strArr = [];

//   let firstChar = "";
//   let firstIndex = 0;
//   for (let i = 0; i < s.length; i++) {
//     const char = s[i];
//     if (!map.get(char)) {
//       map.set(char, 1);
//       firstChar = char;

//       if (i === s.length - 1) {
//         strArr.push(char);
//       }

//       continue;
//     } else {
//       map.set(char, map.get(char) + 1);
//     }

//     // if (!map.get(char)) {
//     //   map.set(char, 1);

//     // } else {
//     // }

//     if (firstChar !== char && map.get(firstChar) === map.get(char)) {
//       strArr.push(s.slice(firstIndex, i + 1));
//       map = new Map();
//     } else if (i === s.length - 1) {
//       return strArr.length + map.size;
//     }
//   }

//   console.log("arr", strArr);
//   return strArr.length;
// }

// 오답(추가로 더 풀어야함)
// function solution(s) {
//   let answer = 0;
//   let idx = 0;

//   while (s.length > 0) {
//     let x = s[0];
//     let count_x = 1;
//     let count_not_x = 0;
//     idx = 1;

//     while (count_x !== count_not_x) {
//       if (s[idx] === x) {
//         count_x += 1;
//       } else {
//         count_not_x += 1;
//       }
//       idx += 1;
//       if (idx === s.length) {
//         break;
//       }
//     }

//     let extracted = s.slice(0, idx);
//     s = s.slice(idx);
//     answer += 1;
//   }

//   return answer;
// }

function solution(s) {
  let answer = 0;
  let idx = 0;

  while (s.length > 0) {
    let x = s[0];
    let count_x = 1;
    let count_not_x = 0;
    idx = 1;

    while (count_x !== count_not_x) {
      if (s[idx] === x) {
        count_x += 1;
      } else {
        count_not_x += 1;
      }
      idx += 1;
      if (idx === s.length) {
        break;
      }
    }

    let extracted = s.slice(0, idx);
    s = s.slice(idx);
    answer += 1;
  }

  return answer;
}

const s1 = "banana";
const s2 = "abracadabra";
const s3 = "aaabbaccccabba";
const s4 = "abababab";
const s5 = "aaaaaa";
const s6 = "aaabbbc";

console.log(solution(s3));
