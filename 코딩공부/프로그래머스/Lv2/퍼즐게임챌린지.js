function solution(diffs, times, limit) {
  const MAX_TIME = 10000;
  const LEN = diffs.length;

  const ch = Array.from({ length: MAX_TIME + 1 }, () => false);

  let lt = 1;
  let rt = limit;

  while (lt <= rt) {
    const level = Math.ceil((rt + lt) / 2);

    let resolveTime = 0;

    for (let i = 0; i < LEN; i++) {
      const diff = diffs[i];
      const time = times[i];

      if (diff <= level) {
        resolveTime += time;
      } else {
        const wrongCount = diff - level;
        const beforeTime = times[i - 1];

        resolveTime = resolveTime + (beforeTime + time) * wrongCount + time;
      }
    }

    if (resolveTime <= limit) {
      rt = level - 1;
      ch[level] = true;
    } else {
      lt = level + 1;
    }
  }

  return ch.findIndex((v) => v === true);
}

console.log(solution([1, 5, 3], [2, 4, 7], 30));
