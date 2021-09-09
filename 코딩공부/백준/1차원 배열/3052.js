let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../예제.txt";
let input = require("fs").readFileSync(filePath).toString().split("\n");

let aa = new Array();
input.forEach((v) => {
    let imsi = parseInt(v);
    if(imsi > 0){
        aa.push(imsi % 42);
    }
});

let s = [...new Set(aa)];
console.log(s.length);