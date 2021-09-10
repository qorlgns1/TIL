let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
let input = fs.readFileSync(filePath).toString().split('\n').filter((v,i,a) => {
    return v !== ''
});

let result = 0;
let arr = input[1].split('').filter((v,i) => {
    return v !== '\r'
});

result = arr.reduce((p,c,i) => {
    return p+=parseInt(c) 
},0)

console.log(result)