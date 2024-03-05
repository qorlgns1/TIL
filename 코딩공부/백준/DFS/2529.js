// https://www.acmicpc.net/problem/2529
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
let [[N], arr] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' '));

N = Number(N);
const answer = [];
const ch = new Array(10).fill(0);

function dfs(str, signIndex) {
  // 2-1. 부등호 + 1의 길이와 문자열의 길이가 같으면 정답에 넣는다.
  // 이때 가장 작은수부터 들어갈 수 밖에 없다.
  if (str.length === N + 1) {
    answer.push(str);
  } else {
    // 2-2 부등호와 문자열의 마지막 숫자, 새롭게 문자열에 붙게될 숫자를 비교한다.
    for (let i = 0; i < 10; i++) {
      if (!ch[i]) {
        // 문자열의 마지막 숫자
        let beforeNumber = Number(str.at(-1));

        // 새롭게 문자열에 붙게될 숫자
        const compareNumber = i;

        // 부등호
        const sign = arr[signIndex];

        // 숫자와 숫자사이 부등호가 참이 아니면 넘긴다.
        if (sign === '>') {
          if (!(beforeNumber > compareNumber)) {
            continue;
          }
        }

        if (sign === '<') {
          if (!(beforeNumber < compareNumber)) {
            continue;
          }
        }

        ch[i] = 1;
        // 2-1 또는 2-2번이 반복된다.
        dfs(str + i, signIndex + 1);
        ch[i] = 0;
      }
    }
  }
}

for (let i = 0; i < ch.length; i++) {
  // 1. 초기 문자열과 몇번째 부등호 인덱스를 이용하여 비교할 것인지 설정한다.
  ch[i] = 1;
  dfs(`${i}`, 0);
  ch[i] = 0;
}

dfs('', 0);

console.log([answer.at(-1), answer[0]].join('\n'));
