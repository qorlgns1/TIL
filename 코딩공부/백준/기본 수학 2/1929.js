let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../예제.txt";
let [a, b] = fs
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

const solution = (a, b) => {
  //console.log(a, b);

  let count = 0;
  if (a === 2) {
    console.log(a);
    if (b === 2) {
      return;
    }
    count++;
    a++;
  }

  for (let i = a; i <= b; i++) {
    const max = Math.ceil(Math.sqrt(i));
    for (let j = 2; j <= max; j++) {
      if (i % j === 0) {
        break;
      }

      if (j === max) {
        count++;
        console.log(i);
      }
    }

    if (i % 2 === 1) {
      i++;
    }
  }
};

solution(a, b);
