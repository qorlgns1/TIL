let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
let a = fs.readFileSync(filePath).toString().split('\n');

a.map((e) => {
    const splitData = e.split(' ');
    const d1 = +splitData[0];
    const d2 = +splitData[1];
    console.log(`${d1+d2}`);
});