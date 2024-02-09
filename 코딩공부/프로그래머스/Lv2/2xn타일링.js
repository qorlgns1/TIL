function solution(n) {
  var answer = 0;
  const arr = [0, 1, 2];

  if (n < 2) {
    return arr[n];
  }

  for (let i = 3; i <= n; i++) {
    arr.push((arr[i - 2] + arr[i - 1]) % 1000000007);
  }

  return arr[n];
}
