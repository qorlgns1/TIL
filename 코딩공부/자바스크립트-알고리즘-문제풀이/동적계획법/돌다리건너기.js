function solution(n) {
  const dy = [0, 1, 2];
  for (let i = 3; i <= n + 1; i++) {
    dy.push(dy[i - 2] + dy[i - 1]);
  }

  return dy.pop();
}

console.log(solution(7));
