let fs = require('fs');
let a = fs.readFileSync('../예제.txt').toString().split('\n');
a = +a;
//let [a, b] = fs.readFileSync('/dev/stdin').toString().split('\n').map(v => +v);

for (let i = 1; i <= 9; i++) {
    console.log(`${a} * ${i} = ${a*i}`);
}
