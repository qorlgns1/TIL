let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../예제.txt";
let input = fs.readFileSync(filePath).toString().trim().split("");

let time = 0;
for (let i = 0; i < input.length; i++) {
  let n = input[i].charCodeAt(0) - 59;
  if (n == 24 || n == 27 || n == 30 || n == 31) {
    n -= 3;
  }
  time += Math.floor(n / 3) + 1;
}

console.log(time);
