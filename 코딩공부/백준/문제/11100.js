// https://www.acmicpc.net/problem/11100
// https://redchiken.tistory.com/category/%EA%B0%9C%EB%B0%9C%EC%9D%BC%EC%A7%80/Algorithm

let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
let [T, ...inputs] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const arr = [1, 2, 4, 8, 20];
const answer = inputs.map((input) => arr[input] ?? 'frogger').join('\n');

console.log(answer);
