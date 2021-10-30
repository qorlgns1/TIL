let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../예제.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const x = [];
const y = [];

input.forEach((v) => {
  const xY = v.split(" ");
  x.push(Number(xY[0]));
  y.push(Number(xY[1]));
});

const solution = (threePoint) => {
  const result = [];

  threePoint.forEach((v) => {
    if (result.includes(v)) {
      const idx = result.indexOf(v);
      result.splice(idx, 1);
    } else {
      result.push(v);
    }
  });
  return result[0];
};

console.log(`${solution(x)} ${solution(y)}`);
