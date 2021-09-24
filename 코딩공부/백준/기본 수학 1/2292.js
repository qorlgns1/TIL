let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
let input = fs.readFileSync(filePath);

let range = 1;
let block = 1;

while (block < input) {
  block += 6 * range;
  range++;
}

console.log(range);
