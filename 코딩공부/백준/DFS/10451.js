let fs = require("fs");
let [_, ...input] = fs
  .readFileSync("../예제.txt")
  .toString()
  .trim()
  .split("\n");

// let [firstLine, secontLine] = fs
//   .readFileSync('/dev/stdin')
//   .toString()
//   .split('\n');

const arr = input
  .filter((_, i) => i % 2 === 1)
  .map((v) => v.split(" ").map(Number));

let count = 0;
const dfs = (arr, ch, i) => {
  if (ch[i] === 1) {
    count++;
    return;
  } else {
    while (!ch[i]) {
      ch[i] = 1;
      dfs(arr, ch, arr[i] - 1);
    }
  }
};

for (let i = 0; i < arr.length; i++) {
  count = 0;
  const ch = new Array(arr[i].length).fill(0);

  for (let j = 0; j < ch.length; j++) {
    if (ch[j] === 0) dfs(arr[i], ch, j);
  }

  console.log(count);
}
