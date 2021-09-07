let fs = require('fs');
let a = fs.readFileSync('../예제.txt').toString();
a = +a;

//4의 배수 체크하기
const check1 = (v) => {
    return v%4 ? false : true;
} 
//100의 배수 체크하기
const check2 = (v) => {
    return v%100 ? true : false;
}
//400의 배수 체크하기
const check3 = (v) => {
    return v%400 ? false : true;
}

console.log(check1(a) && check2(a) || check3(a) ? '1' : '0');