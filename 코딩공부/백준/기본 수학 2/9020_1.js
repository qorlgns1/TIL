const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../예제.txt')
  .toString()
  .trim()
  .split('\n')
  .map((v) => +v);
input.shift();
const MAX = Math.max(...input);
const answer = [];
let prime = new Array(MAX + 1).fill(true);
prime[0] = false;
prime[1] = false;

for (let i = 2; i * i <= MAX + 1; i++) {
  if (prime[i]) {
    for (let j = i * i; j <= MAX + 1; j += i) {
      prime[j] = false;
    }
  }
}

input.forEach((v) => {
  for (let i = Math.ceil(v / 2); i > 1; i--) {
    if (prime[i] && prime[v - i]) {
      answer.push(`${i} ${v - i}`);
      break;
    }
  }
});

console.log(answer.join('\n'));
