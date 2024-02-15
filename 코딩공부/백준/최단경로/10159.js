let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
let [n, m, ...inputs] = fs.readFileSync(filePath).toString().trim().split('\n');

n = +n;
m = +m;

const arr = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));
const reverse_arr = Array.from({ length: n + 1 }, () =>
  new Array(n + 1).fill(0)
);

for (let i = 0; i < m; i++) {
  inputs.forEach((input) => {
    const [x, y] = input.split(' ').map(Number);

    arr[x][y] = 1;
    reverse_arr[y][x] = 1;
  });
}

// 플로이드 와샬 알고리즘
for (let k = 1; k <= n; k++) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (arr[i][k] && arr[k][j]) {
        arr[i][j] = 1;
      }

      if (reverse_arr[i][k] && reverse_arr[k][j]) {
        reverse_arr[i][j] = 1;
      }
    }
  }
}

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    arr[i][j] = arr[i][j] || reverse_arr[i][j];
  }
}

const answer = arr.map((v) => {
  const MY_NODE = 1;
  const ZERO_INDEX = 1;
  return v.filter((vv) => !vv).length - ZERO_INDEX - MY_NODE;
});
answer.shift();

console.log(answer.join('\n'));
