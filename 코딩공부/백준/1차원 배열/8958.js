let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../예제.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .filter((v) => {
    return v.length > 0;
  });

let inputLen = parseInt(input[0]);
let array = input.filter((e, i) => {
  return i !== 0;
});

for (let i = 0; i < inputLen; i++) {
  let temp1 = array[i];
  let splitArr = temp1.split("X");
  splitArr = splitArr.filter((v) => {
    return v !== "";
  });

  let b = splitArr.map((v) => {
    let l = v.length;
    let half = l / 2;
    return l % 2 === 0
      ? (1 + l) * half
      : (1 + l) * Math.floor(half) + Math.floor(half) + 1;
  });

  let c = b.reduce((p, t, i) => {
    return p + t;
  }, 0);

  console.log(c);
}
