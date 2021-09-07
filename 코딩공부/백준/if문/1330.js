let fs = require('fs');
let [a, b] = fs.readFileSync('../예제.txt').toString().split(' ').map(v => +v);
//let [a, b] = fs.readFileSync('/dev/stdin').toString().split(' ').map(v => +v);

console.log(a, b)

if(a > b) {
    console.log('\>');
}else if (a < b) {
    console.log('\<');
}else {
    console.log('\=\=');
}