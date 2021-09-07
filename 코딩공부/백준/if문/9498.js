let fs = require('fs');
let a = fs.readFileSync('../예제.txt').toString().split(' ').map(v => +v);
//let [a, b] = fs.readFileSync('/dev/stdin').toString().split(' ').map(v => +v);

if(a >= 90 && a <= 100) {
    console.log('A');
}else if (a >= 80 && a <= 89) {
    console.log('B');
}else if (a >= 70 && a <= 79) {
    console.log('C');
}else if(a >= 60 && a <= 69 ) {
    console.log('D')
}else {
    console.log('F')
}