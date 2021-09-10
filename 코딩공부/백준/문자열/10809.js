let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
let input = fs.readFileSync(filePath).toString();

let alphabetArr = new Array(26).fill(-1);

for (let i = 0; i < input.length; i++) {
    let index = input[i].charCodeAt(0)-97
    alphabetArr[index] = input.indexOf(input[i]);
}

console.log(alphabetArr.join(' ').trim());