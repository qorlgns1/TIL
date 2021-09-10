let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
let input = fs.readFileSync(filePath).toString().trim().toUpperCase().split('');

let map = new Map();
input.forEach((v) => {
  if (map.get(v) === undefined) {
    map.set(v, 1);
  } else {
    let count = map.get(v);
    map.set(v, ++count);
  }
});

let validation = false;
let maxKey = '';
let maxValue = 0;
map.forEach((v, k, m) => {
  if (m.get(k) > maxValue) {
    maxKey = k;
    maxValue = m.get(k);
    validation = false;
  } else if (m.get(k) === maxValue) {
    validation = true;
  } else {
  }
});
console.log(validation);
if (validation) {
  console.log('?');
} else {
  console.log(maxKey);
}
