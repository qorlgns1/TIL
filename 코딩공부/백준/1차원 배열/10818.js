let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../예제.txt";
let [len, s] = fs.readFileSync(filePath).toString().split("\n");
let array = s.split(" ");

array.sort((a, b) => {
  return a - b;
});

console.log(`${array[0]} ${array[len - 1]}`);
