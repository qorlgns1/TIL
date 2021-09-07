let fs = require('fs');
let [a, b] = fs.readFileSync('../예제.txt').toString().split('\n').map(v => parseInt(v));
//let [a, b] = fs.readFileSync('/dev/stdin').toString().split(' ').map(value => parseInt(value));

const bArray = b.toString();
const len = bArray.length -1;

for (let i = len; i >= 0; i--) {
    console.log(a * bArray[i])

    if(!i){
        console.log(a * b);
    }
}