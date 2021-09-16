let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
let [N, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');

let numWords = Number(N);
let count = 0;

for (let i = 0; i < numWords; i++) {
  let newArr = [];
  let nowArr = arr[i];

  for (let j = 0; j < nowArr.length; j++) {
    if (newArr.indexOf(nowArr[j]) === -1 || nowArr[j - 1] === nowArr[j]) {
      newArr += nowArr.slice(j, j + 1);
    } else {
      break;
    }
  }

  if (newArr.length === nowArr.length) {
    count++;
  }
}

console.log(count);
