let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../예제.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let array = input.map((e) => {
  return Number(e);
});
let max = 0;
let MaxIndex = 0;

for (let i = 0; i < array.length; i++) {
  if (max < array[i]) {
    max = array[i];
    MaxIndex = i;
  }
}

console.log(`${max}\n${MaxIndex + 1}`);
