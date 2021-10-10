let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../예제.txt";
let [B, E] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((v) => {
    if (v === "1") {
      return 2;
    } else {
      return Number(v);
    }
  });

const isPrimeNum = Array(E + 1).fill(true);
for (let n = 2; n <= Math.ceil(Math.sqrt(E)); n++) {
  isPrimeNum[1] = false;
  let m = 2;
  while (n * m <= E) {
    isPrimeNum[n * m] = false;
    m++;
  }
}
const answer = [];
for (let n = B; n <= E; n++) {
  if (isPrimeNum[n]) {
    answer.push(n);
  }
}
console.log(answer.join("\n"));
