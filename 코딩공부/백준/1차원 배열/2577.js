let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../예제.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let multiply = input[0] * input[1] * input[2];

let array = new Array(10).fill(0);
let m = multiply.toString();

for (let i = 0; i < m.length; i++) {
  const number = m[i];
  array[number] = array[number] + 1;
}

console.log(array.join("\n"));

/* 다른 사람 코드
const [a, b, c] = require('fs')
    .readFileSync('dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map(v => +v);

let result = Array(10).fill(0);
let num = `${a * b * c}`
    .split('')
    .forEach(n => {result[n] += 1;});

console.log(result.join('\n'));
*/
