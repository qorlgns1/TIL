let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../예제.txt";
let input = fs.readFileSync(filePath).toString().trim();

let cnt = 0;

while (input > 0) {
  cnt++;
  input -= cnt;
}

if (cnt % 2 === 0) {
  console.log(`${cnt + input}/${1 + -input}`);
} else {
  console.log(`${1 + -input}/${cnt + input}`);
}
