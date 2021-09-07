const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line)
})
  .on('close', function () {
    let a = input[0];
    let b = input[1];

    if(a>0){
        return console.log(b>0 ? 1 : 4);
    }else {
        return console.log(b>0 ? 2 : 3);
    }
  process.exit();
});