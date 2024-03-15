function solution(begin, target, words) {
  var answer = 0;

  const ch = new Array(words.length).fill(0);

  // 큐의 원소는 [단어, 변환 과정 횟수, 체크배열]로 이루어져있다.
  // 체크배열은 이미 변환을 시도했던 단어인지를 판단하고,
  // 이미 변환을 시도했던 인덱스의 단어이면
  // 그 다음 단어를 비교하도록 넘기기 위한 용도이다.
  const queue = [[begin, 0, ch]];

  while (queue.length) {
    const [word, cnt, check] = queue.shift();

    // 단어 변환이 성공하면 변환 과정 횟수를 리턴
    if (word === target) return cnt;

    for (let i = 0; i < words.length; i++) {
      // 이미 변환을 시도했던 단어면 넘어가기
      if (check[i]) continue;

      const compare = words[i];
      let diff = 0;

      // 변환할 단어와 현재 주어진 단어를 비교하여 다른 스펠링이 하나인지 찾는다.
      for (let j = 0; j < compare.length; j++) {
        const compareChar = compare[j];
        const wordChar = word[j];

        if (compareChar !== wordChar) diff++;
        if (diff > 1) break;
      }

      //다른 스펠링이 하나이면
      if (diff === 1) {
        // 새로운 체크배열을 만들어 체크하고 큐에 넘긴다.
        // 배열은 참조타입이므로 다른곳에서 영향을 받을 수 있어 새로운 배열로 만들어 넘김
        const newCheck = [...check];
        newCheck[i] = 1;
        queue.push([compare, cnt + 1, newCheck]);
      }
    }
  }

  return answer;
}

const begin = ['hit', 'hit'];
const target = ['cog', 'cog'];
const words = [
  ['hot', 'dot', 'dog', 'lot', 'log', 'cog'],
  ['hot', 'dot', 'dog', 'lot', 'log'],
];

for (let i = 0; i < begin.length; i++) {
  console.log(solution(begin[i], target[i], words[i]));
}
