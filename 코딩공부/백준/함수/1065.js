let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
let input = Number(fs.readFileSync(filePath).toString());

function hansoo(N) {
    let cnt = 0;
    if(N < 100) {
        return N;
    }else {
        for (let i = 100; i <= N; i++) {
            let map = i.toString().split('')
            if(map[1] - map[0] === map[2] - map[1]){
                cnt++
            }
        }
        return cnt + 99;
    }    
}

console.log(hansoo(input))