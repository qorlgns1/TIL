function solution(N, number) {
  const dp = Array.from({ length: 9 }, () => new Set());

  if (N === number) {
    return 1;
  }

  for (let i = 1; i <= 8; i++) {
    dp[i].add(Number(String(N).repeat(i)));

    for (let j = 0; j < i; j++) {
      for (let first of dp[j]) {
        for (const second of dp[i - j]) {
          dp[i].add(first + second);
          dp[i].add(first - second);
          dp[i].add(first * second);
          dp[i].add(first / second);
        }
      }
      if (dp[i].has(number)) return i;
    }
  }
  return -1;
}

const N = [5, 2];
const number = [12, 11];

for (let i = 0; i < number.length; i++) {
  console.log(solution(N[i], number[i]));
}
