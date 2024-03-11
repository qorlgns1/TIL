// https://www.acmicpc.net/problem/12851
// 문제가 잘못된 것 같다.
// 1 10을 넣었을 때 답이 4와 1이 나와야 한다고 생각한다.
// 통과되는 답은 4 2인데 마지막 2의 경로를 보면 동일하기 때문에 하나의 경로라고 볼 수 있다고 생각한다.

let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
let [N, K] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

if (N === K) {
  console.log([0, 1].join('\n'));
} else {
  const MAX_LEN = 100000;
  let dist = Array.from(Array(MAX_LEN + 1), () => 0);
  let cnt = Array.from(Array(MAX_LEN + 1), () => 0);

  const queue = [N];
  cnt[N] = 1;

  while (queue.length) {
    const now = queue.shift();
    if (now === K) {
      break;
    }
    const next = [now + 1, now - 1, now * 2].filter(
      (v) => v >= 0 && v <= 100000
    );

    next.forEach((v) => {
      if (dist[v] == 0) {
        queue.push(v);
        dist[v] = dist[now] + 1;
        cnt[v] += cnt[now];
      } else if (dist[v] == dist[now] + 1) {
        cnt[v] += cnt[now];
      }
    });
  }

  console.log([dist[K], cnt[K]].join('\n'));
}
