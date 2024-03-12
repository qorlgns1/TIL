// https://www.acmicpc.net/problem/14226
// https://brick-parrot-a90.notion.site/BFS-66d28c4b19184cf4a7a7aad8275af728?pvs=4

let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
const S = Number(fs.readFileSync(filePath).toString().trim());

let answer = 0;
const queue = [[1, 0, 0]];
const ch = Array.from({ length: 1001 }, () => [0, 0]);
ch[1][0] = 1;

while (queue.length) {
  const [imojiCnt, time, clipCnt] = queue.shift();

  if (imojiCnt === S) {
    answer = time;
    break;
  }

  const nextTime = time + 1;

  // 클립보드 복사
  if (!ch[imojiCnt][imojiCnt]) {
    ch[imojiCnt][imojiCnt] = 1;
    queue.push([imojiCnt, nextTime, imojiCnt]);
  }

  const nextEmojiCntArr = [imojiCnt + clipCnt, imojiCnt - 1].filter((cnt) => {
    return cnt <= 1000 && cnt >= 0 && !ch[cnt][clipCnt];
  });

  // 클립보드 복사 안함
  nextEmojiCntArr.forEach((nextEmojiCnt) => {
    ch[nextEmojiCnt][clipCnt] = 1;
    queue.push([nextEmojiCnt, nextTime, clipCnt]);
  });
}

console.log(answer);
