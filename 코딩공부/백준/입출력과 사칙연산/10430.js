let fs = require('fs');
let [a, b, c] = fs.readFileSync('../예제.txt').toString().split(' ').map(v => parseInt(v));
//let [a, b] = fs.readFileSync('/dev/stdin').toString().split(' ').map(value => parseInt(value));

const case1 = (A,B,C) => {
    return (A+B)%C
}
const case2 = (A,B,C) => {
    return ((A%C) + (B%C))%C
}
const case3 = (A,B,C) => {
    return (A*B)%C;
}
const case4 = (A,B,C) => {
    return  ((A%C) * (B%C))%C
}

console.log(case1(a, b, c));
console.log(case2(a, b, c));
console.log(case3(a, b, c));
console.log(case4(a, b, c));