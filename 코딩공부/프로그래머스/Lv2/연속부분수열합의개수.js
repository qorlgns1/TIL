function solution(elements) {
  const arr = [...elements, ...elements.slice(0, -1)];

  let elementsLength = 1;
  const set = new Set();

  // 길이가 5면 4만큼 돈다.
  for (let i = 0; i < elements.length - 1; i++) {
    for (let j = 0; j < elements.length; j++) {
      let sum = 0;
      for (let k = j; k < elementsLength + j; k++) {
        sum += arr[k];
      }
      set.add(sum);
    }

    elementsLength++;
  }

  // 마지막 전체 개수를 합하는 한가지의 합
  set.add(elements.reduce((a, c) => a + c, 0));
  return set.size;
}

console.log(solution([7, 9, 1, 1, 4]));
