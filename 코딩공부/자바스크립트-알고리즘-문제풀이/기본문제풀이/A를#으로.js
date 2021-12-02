// A를 #으로
// 대문자로 이루어진 영어단어가
// 입력되면 단어에 포함된 ‘A'를 모두 ’#‘으로 바꾸어 출력하는 프로그램을 작성하세요.

// ▣ 입력설명
// 첫 번째 줄에 문자열이 입력된다.

// ▣ 출력설명
// 첫 번째 줄에 바뀐 단어를 출력한다.

// ▣ 입력예제 1
// BANANA

// ▣ 출력예제 1
// B#N#N#

const solution = (str) => {
  let answer = "";

  // 방법 1
  // for (let i = 0; i < str.length; i++) {
  //   // if (str[i] === "A") {
  //   //   answer += "#";
  //   // } else {
  //   //   answer += str[i];
  //   // }

  //   str[i] === "A" ? (answer += "#") : (answer += str[i]);
  // }

  // 방법 2
  // 대문자로 이루어진 영어단어라서 str.replace(/A/g, "#")
  // 대소문자 상관없이 이루어진 영어단어를 치환하려면 str.replace(/A/gi, "#")
  answer = str.replace(/A/g, "#");

  return answer;
};

let str = "BANANA";

console.log(solution(str));
