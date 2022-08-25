function solution(numbers) {
  const strArr = numbers.map((num) => num.toString());
  const answerArr = strArr.sort((a, b) => {
    return b + a - (a + b);
  });

  if (answerArr[0] === "0") {
    return "0";
  }

  return answerArr.join("");
}
