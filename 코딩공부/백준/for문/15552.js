let fs = require('fs');
let a = fs.readFileSync('/dev/stdin').toString().split('\n');
let result = '';

for (let i = 1; i <= a[0]; i++) {
    const [A,B] = a[i].split(' ');
    result += (+A)+(+B) + '\n';
}

console.log(result)
