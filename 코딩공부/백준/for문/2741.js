let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
let a = fs.readFileSync(filePath).toString();
let len = +a;
let result = '';
for (let i = 1; i <= len; i++) {
    result += i + '\n'
}
console.log(result);