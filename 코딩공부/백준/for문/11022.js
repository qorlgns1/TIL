let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
let a = fs.readFileSync(filePath).toString().split('\n');
let result = '';

for (let i = 1; i <= a[0]; i++) {
    const [A,B] = a[i].split(' ');
    result += `Case #${i}: ${+A} + ${+B} = ${(+A)+(+B)}\n`;
}

console.log(result)
