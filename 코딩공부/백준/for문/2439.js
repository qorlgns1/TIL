let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
let a = fs.readFileSync(filePath).toString();
let len = +a;
let result = '';
let array = new Array(len).fill(' ');

for (let i = len-1; i >= 0; i--) {
    array[i] = '*';
    result += array.join('');
    result += '\n'; 
}

console.log(result)
