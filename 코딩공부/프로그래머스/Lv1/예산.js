function solution(d, budget) {
  let count = 0;

  d.sort((a, b) => a - b);
  d.reduce((a, b) => {
    if (a + b <= budget) {
      count++;
      return a + b;
    }
  }, 0);

  return count;
}

solution([1, 3, 2, 5, 4], 9);
// solution([2,2,3,3], 10);
