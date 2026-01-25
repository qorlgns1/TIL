function solution(n, works) {
  const totalWorkTime = works.reduce((acc, cur) => acc + cur, 0);
  if (totalWorkTime <= n) return 0;

  works.sort((a, b) => b - a);

  let remainWorkTime = n;

  while (remainWorkTime) {
    const max = works[0];

    for (let i = 0; i < works.length; i++) {
      if (max <= works[i]) {
        works[i]--;
        remainWorkTime--;
      }

      if (!remainWorkTime) break;
    }
  }

  return works.reduce((acc, cur) => acc + Math.pow(cur, 2), 0);
}

console.log(solution(4, [4, 3, 3]));

// 3, 3, 4
