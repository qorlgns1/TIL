function solution(dartResult) {
  var answer = [];
  let number = 0;

  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] === "1") {
      if (dartResult[i + 1] === "0") {
        number = 10;
        i++;
      } else {
        number = 1;
      }
    } else if (!isNaN(Number(dartResult[i]))) {
      number = Number(dartResult[i]);
    } else if (["S", "D", "T"].includes(dartResult[i])) {
      switch (dartResult[i]) {
        case "S":
          answer.push(Math.pow(number, 1));
          break;
        case "D":
          answer.push(Math.pow(number, 2));
          break;
        case "T":
          answer.push(Math.pow(number, 3));
          break;
      }
    } else {
      switch (dartResult[i]) {
        case "*":
          if (answer.length === 1) {
            answer[0] *= 2;
          } else {
            answer[answer.length - 1] *= 2;
            answer[answer.length - 2] *= 2;
          }
          break;
        case "#":
          answer[answer.length - 1] *= -1;
          break;
      }
    }
  }

  return answer.reduce((acc, cur) => acc + cur);
}

const dartResult = [
  "1S2D*3T",
  "1D2S#10S",
  "1D2S0T",
  "1S*2T*3S",
  "1D#2S*3S",
  "1T2D3D#",
  "1D2S3T*",
];

for (let i = 0; i < dartResult.length; i++) {
  console.log(solution(dartResult[i]));
}
