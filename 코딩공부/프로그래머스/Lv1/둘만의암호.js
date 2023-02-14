// 실패한 케이스
// function solution(s, skip, index) {
//   let answer = "";
//   const alpabets = [
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z",
//   ];

//   const skipAlpabets = [...alpabets];

//   skip.split("").forEach((char) => {
//     const findIndex = alpabets.findIndex((alpabet) => alpabet === char);
//     skipAlpabets.splice(findIndex, 1);
//   });

//   // s.split('').forEach(char => {
//   //   alpabets
//   // })

//   s.split("").forEach((char) => {
//     const charIndex = skipAlpabets.findIndex((alpabet) => alpabet === char);

//     if (charIndex === -1) {

//     }

//     if (charIndex + index > skipAlpabets.length - 1) {
//       answer += skipAlpabets[charIndex + index - skipAlpabets.length];
//     } else {
//       answer += skipAlpabets[charIndex + index];
//     }
//   });

//   return answer;
// }

function solution(s, skip, index) {
  let answer = "";
  const alpabets = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const alpabetsArr = [...alpabets, ...alpabets];

  const len = s.split("").length;
  for (let i = 0; i < len; i++) {
    const char = s[i];
    // const arr = [char];
    let charIndex = alpabets.findIndex((alpabet) => alpabet === char);

    let count = 0;
    let temp = "";
    while (count !== index) {
      if (skip.includes(alpabetsArr[charIndex + 1])) {
        charIndex++;
        continue;
      }

      charIndex++;
      count++;
      temp += alpabetsArr[charIndex];
    }

    answer += temp[temp.length - 1];
  }

  return answer;
}

console.log(solution("aukksw", "wbqd", 5));
