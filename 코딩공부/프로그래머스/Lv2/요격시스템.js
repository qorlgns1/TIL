// A 나라가 B나라를 침공
// B 나라의 대부분의 전략 자원은 아이기스 군사 기지에 집중
// A 나라는 B 나라의 아이기스 군사 기지에 융단 폭격
// B 나라의 대응
// 백발 백중을 할 수 있는 요격 시스템 있지만 미사일을 최소로 사용해서 모든 폭격 미사일을 요격

// A 나라가 발사한 폭격 미사일은 X 축에 평행한 직선 형태의 모양
// a＜x＜b를 만족시키는 실수 x의 집합을 개구간 a,b라 하고, (a,b)로 나타냄

function solution(targets) {
  var answer = 0;
  let prev = -1;
  targets.sort((a, b) => a[1] - b[1]);

  for (let i = 0; i < targets.length; i++) {
    const [start, end] = targets[i];

    if (prev <= start) {
      prev = end;
      answer++;
    }
  }

  return answer;
}

const targets = [
  [4, 5],
  [4, 8],
  [10, 14],
  [11, 13],
  [5, 12],
  [3, 7],
  [1, 4],
];

console.log(solution(targets));
