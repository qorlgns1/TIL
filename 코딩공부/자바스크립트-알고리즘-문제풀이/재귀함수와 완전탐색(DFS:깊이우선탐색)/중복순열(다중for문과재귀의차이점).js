function solution(n, m) {
  const answer = [];
  const temp = new Array(m).fill(0);
  function DFS(L) {
    if (L === m) {
      answer.push([...temp]);
    } else {
      for (let i = 1; i <= n; i++) {
        temp[L] = i;
        DFS(L + 1);
      }
    }
  }

  DFS(0);

  return answer;
}

console.log(solution(3, 4));
