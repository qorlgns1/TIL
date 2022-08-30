function solution(s) {
  let answer = "";
  const word = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let imsiWord = "";

  for (let i = 0; i < s.length; i++) {
    if (Number.isNaN(parseInt(s[i]))) {
      imsiWord += s[i];
    } else {
      answer += String(s[i]);
      continue;
    }

    if (word.indexOf(imsiWord) > -1) {
      answer += word.indexOf(imsiWord);
      imsiWord = "";
    }
  }

  return Number(answer);
}

console.log(solution("one4seveneight"));
