let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
let [a,b] = fs.readFileSync(filePath).toString().split('\n');
const checkArray = a.split(' ');
const array = b.split(' ');
const n = parseInt(checkArray[1]);
const newArray = array.filter(function(e,i,a){
    return n > parseInt(e);
})

console.log(newArray.join(' '));