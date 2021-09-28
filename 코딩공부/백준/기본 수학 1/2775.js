let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
let [L, ...A] = require('fs').readFileSync(filePath).toString().trim().split('\n');
A = A.map((e) => {
  return Number(e);
});

const nextFloor = (k, n) => {
  let floor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  let totalFloor = [];
  totalFloor.push(floor);

  for (let i = 0; i < k; i++) {
    let tempValue = 0;
    let tempFloor = [];
    for (let j = 0; j < n; j++) {
      tempValue += floor[j];
      tempFloor.push(tempValue);
    }
    totalFloor.push(tempFloor);
    floor = tempFloor;
  }

  return totalFloor[k][n - 1];
};

for (let i = 0; i < L; i++) {
  let k = A[i * 2];
  let n = A[i * 2 + 1];

  console.log(nextFloor(k, n));
}
