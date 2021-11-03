let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../예제.txt";
const [L, ...input] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const solution = (arr) => {
  const r1 = arr[2];
  const r2 = arr[5];

  const d = Math.sqrt(
    Math.abs(arr[0] - arr[3]) ** 2 + Math.abs(arr[1] - arr[4]) ** 2
  );

  if (d === 0 && r1 === r2) {
    console.log("-1");
  } else if (d > r1 + r2 || d < Math.abs(r1 - r2)) {
    console.log("0");
  } else if (d === r1 + r2 || d === Math.abs(r1 - r2)) {
    console.log("1");
  } else {
    console.log("2");
  }
};

for (let i = 0; i < L; i++) {
  const arr = input[i]
    .trim()
    .split(" ")
    .map((v) => Number(v));

  solution(arr);
}
