function solution(answers) {
  var answer = [];
  let arrays = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  let collect = new Array(3).fill(0);

  for (let i = 0; i < 3; i++) {
    const ar = arrays[i];
    const len = ar.length;
    for (let j = 0; j < answers.length; j++) {
      if (answers[j] === ar[j % len]) {
        collect[i]++;
      }
    }
  }

  const max = Math.max(...collect);
  const winner = [];
  collect.forEach((e, i) => {
    if (e === max) {
      winner.push(i + 1);
    }
  });

  console.log(winner);
  return answer;
}

solution([1, 3, 2, 4, 2]);
