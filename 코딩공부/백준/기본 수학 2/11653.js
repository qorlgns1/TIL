let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
let number = require('fs').readFileSync(filePath).toString().trim();
number = Number(number);
