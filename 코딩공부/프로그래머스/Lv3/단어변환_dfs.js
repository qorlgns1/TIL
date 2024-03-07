function solution(begin, target, words) {
  var answer = Number.MAX_SAFE_INTEGER;
  const ch = new Array(words.length).fill(0);

  function dfs(word, cnt) {
    if (word === target) {
      answer = Math.min(answer, cnt);
    } else {
      for (let i = 0; i < words.length; i++) {
        if (ch[i]) continue;

        const compareWord = words[i];
        let diffCount = 0;
        for (let j = 0; j < compareWord.length; j++) {
          if (word[j] !== compareWord[j]) diffCount++;
          if (diffCount >= 2) break;
        }

        if (diffCount === 1) {
          ch[i] = 1;
          dfs(compareWord, cnt + 1);
          ch[i] = 0;
        }
      }
    }
  }

  dfs(begin, 0);

  return answer === Number.MAX_SAFE_INTEGER ? 0 : answer;
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
