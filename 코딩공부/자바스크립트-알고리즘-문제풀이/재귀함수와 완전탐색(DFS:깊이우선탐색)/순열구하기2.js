function solution(n) {
  const answer = [];
  const ch = new Array(n + 1).fill(0);
  const temp = new Array(n).fill(0);

  function DFS(L) {
    if (L === n + 1) {
      answer.push([...temp]);
    } else {
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          temp[L - 1] = i;
          DFS(L + 1);
          ch[i] = 0;
        }
      }
    }
  }

  DFS(1);

  return answer;
}

console.log(solution(4));
