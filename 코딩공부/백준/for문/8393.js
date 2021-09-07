let fs = require('fs');
let a = fs.readFileSync('../예제.txt').toString();
a = +a
let array = new Array(a);
array.fill(1);
result = array.reduce((acc, cur, i) => {
    return acc + ++i;
  }, 0);
 
console.log(result);
