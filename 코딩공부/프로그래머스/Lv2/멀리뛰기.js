function recursive(n) {
  if (n === 1) {
    return 1;
  }

  if (n === 2) {
    return 2;
  }

  return recursive(n - 2) + recursive(n - 1);
}

function solution(n) {
  const dy = [0, 1, 2];

  if (n === 1) {
    return 1;
  }

  if (n === 2) {
    return 2;
  }

  while (dy.length < n + 1) {
    const firstFromBack = dy[dy.length - 1] % 1234567;
    const secondFromBack = dy[dy.length - 2] % 1234567;

    dy.push(firstFromBack + secondFromBack);
  }
  return dy[dy.length - 1] % 1234567;
}

console.log(solution(1));
