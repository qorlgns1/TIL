// https://www.acmicpc.net/problem/1446
// https://brick-parrot-a90.notion.site/89f2060a51fc4edfa426b68ad2c739ae

let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
let [[N, D], ...arr] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

arr = needValueFilter(arr, D);

// 작은 시작시간 순서로 정렬
arr.sort((a, b) => a[0] - b[0]);

// 도착, 이동 거리
// const answer = [[0, 0, []]];
const answer = [[0, 0]];

for (let i = 0; i < arr.length; i++) {
  const [startPosition, arrivePosition, easyWay] = arr[i];
  const answerLenth = answer.length;

  for (let j = 0; j < answerLenth; j++) {
    // 이전 도착 지점, 이전 남은 거리, 이전 이동 거리
    // const [beforeArrived, movedDistance, infos] = answer[j];
    const [beforeArrived, movedDistance] = answer[j];
    if (beforeArrived > startPosition) continue;
    const basicMove = startPosition - beforeArrived;
    // const newMovedInfo = structuredClone([...infos, arr[i]]);
    // answer.push([arrivePosition, movedDistance + basicMove + easyWay, newMovedInfo]);
    answer.push([arrivePosition, movedDistance + basicMove + easyWay]);
  }
}

console.log(
  answer.reduce((acc, [position, distance]) => {
    const finishDistance = position === D ? distance : distance + D - position;

    return Math.min(acc, finishDistance);
  }, Number.MAX_SAFE_INTEGER)
);

function needValueFilter(arr, arriveDistance) {
  const map = new Map();

  for (const [start, end, fastDistance] of arr) {
    if (end - start <= fastDistance) continue;
    if (end > arriveDistance) continue;

    const key = `${start} ${end}`;
    const savedFastDistance = map.get(key);

    if (savedFastDistance) {
      map.set(key, Math.min(savedFastDistance, fastDistance));
    } else {
      map.set(key, fastDistance);
    }
  }

  return Array.from(map, ([key, value]) => [
    ...key.split(' ').map(Number),
    value,
  ]);
}
