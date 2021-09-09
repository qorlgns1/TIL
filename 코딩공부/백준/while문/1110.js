let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
let i = +fs.readFileSync(filePath).toString();

let result = 0;
let v = 0;
if(i < 10) {
    v = '0' + i;
}

console.log(typeof(v))

do{
    console.log('gg')
}while(result === i){
    console.log()
}