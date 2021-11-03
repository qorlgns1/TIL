let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../예제.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const solution = (num) => {
  if (num < 2) {
    return 1;
  } else {
    return num * solution(num - 1);
  }
};

console.log(solution(input));
