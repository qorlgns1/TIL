function solution(k, tangerine) {
  let answer = 0;
  const tangerineSizeMap = {};

  tangerine.forEach((fruit) => {
    tangerineSizeMap[fruit]
      ? (tangerineSizeMap[fruit] += 1)
      : (tangerineSizeMap[fruit] = 1);
  });

  const tangerineDescCountArr = Object.entries(tangerineSizeMap).sort(
    (a, b) => {
      return b[1] - a[1];
    }
  );
  tangerineDescCountArr.sort((a, b) => {
    return b[1] - a[1];
  });

  for (let i = 0; i < tangerineDescCountArr.length; i++) {
    const [_, count] = tangerineDescCountArr[i];
    k = k - count;
    answer++;

    if (k <= 0) {
      break;
    }
  }

  return answer;
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]));
