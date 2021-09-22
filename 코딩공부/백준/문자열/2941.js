let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
let input = fs.readFileSync(filePath).toString().trim();

let word = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

for (let i = 0; i < word.length; i++) {
  if (input.includes(word[i])) {
    let reg = new RegExp(word[i], 'g');
    input = input.replace(reg, 'P');
  }
}

console.log(input.length);

/* 더 빠른 답안
const crAlpha = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

for (let alphabet of crAlpha) {
  input = input.split(alphabet).join("Q");
}

console.log(input.length);
*/
