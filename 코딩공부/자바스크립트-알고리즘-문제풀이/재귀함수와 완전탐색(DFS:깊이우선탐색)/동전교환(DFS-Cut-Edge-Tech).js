function solution(N, M) {
  let answer = Number.MAX_SAFE_INTEGER;
  let a = 1;
  N.sort((a, b) => b - a);

  function DFS(L, sum) {
    a++;
    console.log('a', a);

    if (sum > M) {
      return;
    }

    if (L >= answer) {
      return;
    }

    if (sum === M) {
      console.log(L, sum);
      answer = Math.min(L, answer);
    } else {
      for (let i = 0; i < N.length; i++) {
        DFS(L + 1, sum + N[i]);
      }
    }
  }

  DFS(0, 0);

  return answer;
}

console.log(solution([1, 2, 5], 100));
