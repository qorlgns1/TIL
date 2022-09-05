function solution(survey, choices) {
  let answer = "";
  const point = [3, 2, 1, 0, 1, 2, 3];
  const result = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  survey.forEach((category, i) => {
    if (choices[i] > 4) {
      const [, character] = category.split("");
      result[character] += point[choices[i] - 1];
    }

    if (choices[i] < 4) {
      const [character] = category.split("");
      result[character] += point[choices[i] - 1];
    }
  });

  result["R"] >= result["T"] ? (answer += "R") : (answer += "T");
  result["C"] >= result["F"] ? (answer += "C") : (answer += "F");
  result["J"] >= result["M"] ? (answer += "J") : (answer += "M");
  result["A"] >= result["N"] ? (answer += "A") : (answer += "N");

  return answer;
}

function solution(survey, choices) {
  const mbti = ["RT", "CF", "JM", "AN"];
  const point = {};

  mbti.map((type) => {
    type.split("").map((char) => (point[char] = 0));
  });

  choices.map((choice, i) => {
    const [char1, char2] = survey[i];
    const 점수 = Math.abs(choice - 4);
    choice > 4 ? (point[char2] += 점수) : (point[char1] += 점수);
  });

  return mbti
    .map(([type1, type2]) => (point[type1] >= point[type2] ? type1 : type2))
    .join("");
}

console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]));
console.log(solution(["TR", "RT", "TR"], [7, 1, 3]));
