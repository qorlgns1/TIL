let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');

const arr = input.map((v) => {
  let str = v.toString();
  let result = str[2] + str[1] + str[0];
  return parseInt(result);
});

console.log(arr[0] > arr[1] ? arr[0] : arr[1]);
