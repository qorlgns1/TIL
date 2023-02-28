let fs = require("fs");
let [N, cards] = fs
  .readFileSync("../예제.txt")
  // .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(`\n`);

let cardPacks = cards.split(" ").map(Number);
const dy = [0, ...cardPacks];

for (let i = 2; i <= cardPacks.length; i++) {
  for (let j = 1; j < i; j++) {
    dy[i] = Math.min(dy[i], dy[i - j] + dy[j]);
  }
}

console.log(dy[N]);
