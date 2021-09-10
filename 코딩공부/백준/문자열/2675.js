let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .filter((v, i, a) => {
    return v !== '';
  });

for (let i = 1; i < input.length; i++) {
  const a = input[i].trim().split(' ');
  const repeat = a[0];
  const str = a[1];
  const tempArray = str.split('').map((v) => {
    return v.repeat(repeat);
  });
  console.log(tempArray.join(''));
}
