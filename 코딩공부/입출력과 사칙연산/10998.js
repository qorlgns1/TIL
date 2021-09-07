let fs = require('fs');
let [a, b] = fs.readFileSync('../예제.txt').toString().split(' ').map(v => parseInt(v));
//let [a, b] = fs.readFileSync('/dev/stdin').toString().split(' ').map(value => parseInt(value));

console.log(a*b);