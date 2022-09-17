let fs = require('fs');
let [n, array, x] = fs
  .readFileSync('../예제.txt')
  .toString()
  .split('\n')
  .map((v, i) => {
    if (i !== 1) {
      return +v;
    } else {
      return v.split(' ').map((num) => +num);
    }
  });

// let [n, array, x] = fs
//   .readFileSync('/dev/stdin')
//   .toString()
//   .split('\n')
//   .map((v, i) => {
//     if (i !== 1) {
//       return +v;
//     } else {
//       return v.split(' ').map((num) => +num);
//     }
//   });

if (n === 1 || x === 1) {
  console.log(0);
  return;
}

let lt = 0;
let rt = n - 1;
let count = 0;

array.sort((a, b) => a - b);

while (lt < rt) {
  const sum = array[lt] + array[rt];

  if (sum > x) {
    rt--;
  } else if (sum === x) {
    count++;
    lt++;
    rt--;
  } else {
    lt++;
  }
}

console.log(count);
