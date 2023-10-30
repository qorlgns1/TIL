function solution(k, m, score) {
  var answer = 0;

  score.sort((a, b) => b - a);

  let point = 0;

  while (point < score.length) {
    point = point + m - 1;
    if (score[point]) {
      answer += score[point] * m;
      point++;
    }
  }

  return answer;
}

const k = [3, 4];
const m = [4, 3];
const score = [
  [1, 2, 3, 1, 2, 3, 1],
  [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2],
];

for (let i = 0; i < k.length; i++) {
  console.log(solution(k[i], m[i], score[i]));
}
