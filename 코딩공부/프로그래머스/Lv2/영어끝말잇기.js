function solution(n, words) {
  const answer = [words[0]];

  for (let i = 1; i < words.length; i++) {
    const lastStr = answer[answer.length - 1].split('').splice(-1, 1)[0];
    const firstStr = words[i][0];

    if (lastStr !== firstStr) {
      return [(i % n) + 1, Math.ceil((i + 1) / n)];
    }

    if (answer.indexOf(words[i]) > -1) {
      return [(i % n) + 1, Math.ceil((i + 1) / n)];
    }

    answer.push(words[i]);
  }

  return [0, 0];
}

console.log(solution(2, ['helle', 'ene', 'ene', 'hello']));

// console.log(
//   solution(3, [
//     'tank',
//     'kick',
//     'know',
//     'wheel',
//     'land',
//     'dream',
//     'mother',
//     'robot',
//     'tank',
//   ])
// );

// console.log(
//   solution(2, ['hello', 'one', 'even', 'never', 'now', 'world', 'draw'])
// );
