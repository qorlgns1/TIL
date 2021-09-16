let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../예제.txt";
let input = fs.readFileSync(filePath).toString().trim();
let len = input.length;
let word = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

let cnt = 0;
for (let i = 0; i < len; i++) {
  console.log("input", input);
  if (input === "") {
    break;
  }

  const a = input.substring(0, 2);
  if (word.includes(a)) {
    input = input.substring(word[word.indexOf(a)].length - 1, input.length);
    cnt++;
  } else {
    input = input.substring(1, input.length);
    cnt++;
  }
  // if (input.includes(word[i])) {
  //   console.log(i, word[i]);
  //   input = input.replace(word[i], "");
  //   cnt++;
  // } else {
  //   input = input.substring(i + 1, input.length - 1);
  //   cnt++;
  // }
}
console.log(cnt);
