let fs = require('fs');
let [h, m] = fs.readFileSync('../예제.txt').toString().split(' ').map(v => +v);
//let [a, b] = fs.readFileSync('/dev/stdin').toString().split(' ').map(v => +v);

let wakeUpTime = new Date();
wakeUpTime.setHours(h);
wakeUpTime.setMinutes(m);

wakeUpTime.setMinutes(wakeUpTime.getMinutes()-45);

let newHour = wakeUpTime.getHours();
let newMinute = wakeUpTime.getMinutes();

console.log(newHour+' '+newMinute);

