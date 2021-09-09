let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../예제.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .filter((v) => {
    return v.length > 0;
  });

let array = input.splice(1);

for (let i = 0; i < array.length; i++) {
  let pointArray = array[i].split(" ").filter((v, i) => {
    return i !== 0;
  });

  let splitArray = [...pointArray];
  let splitArrayLen = splitArray.length;
  let pointSum = splitArray.reduce((p, c, i) => {
    return p + Number(c);
  }, 0);

  let pointAvg = Math.round((pointSum / splitArrayLen) * 1000) / 1000;
  let highPoint = pointArray.filter((v, i) => {
    return v > pointAvg;
  });

  console.log(((highPoint.length / splitArrayLen) * 100).toFixed(3) + "%");
}
