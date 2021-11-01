let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../예제.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const array = input.splice(0, input.length - 1);

const solution = (arr) => {
  const newArr = arr
    .split(" ")
    .map((v) => {
      return Number(v);
    })
    .sort((a, b) => a - b);

  return newArr[0] ** 2 + newArr[1] ** 2 === newArr[2] ** 2 ? "right" : "wrong";
};

for (let i = 0; i < array.length; i++) {
  console.log(solution(array[i]));
}
