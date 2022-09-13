function solution(A, B) {
  const a = A.sort((a, b) => b - a);
  const b = B.sort((a, b) => a - b);

  return a.reduce((acc, cur, i) => (acc += a[i] * b[i]), 0);
}

console.log(solution([1, 4, 2], [5, 4, 4]));
