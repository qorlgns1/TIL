let fs = require('fs');
let a = fs.readFileSync('../예제.txt').toString().split('\n');

for (let i = 1; i <= a[0]; i++) {
    const [A,B] = a[i].split(' ');
    console.log((+A)+(+B))
}
