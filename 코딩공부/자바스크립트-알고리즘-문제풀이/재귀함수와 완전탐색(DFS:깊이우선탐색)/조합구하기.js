function solution(n, m) {
  const answer = [];
  const ch = new Array(n + 1).fill(0);
  let checkCount = 0;
  const temp = [];

  function DFS(L) {
    if (checkCount === m || L === n + 1) {
      answer.push([...temp]);
    } else {
      for (let i = 1; i <= n; i++) {
        const tempLastNum = temp[temp.length - 1] || 0;

        if (i < tempLastNum) {
          continue;
        }

        if (ch[i] === 0 && checkCount <= m) {
          ch[i] = 1;
          checkCount++;
          temp.push(i);
          DFS(L + 1);
          temp.pop();
          checkCount--;
          ch[i] = 0;
        }
      }
    }
  }

  DFS(0);
  console.log(answer);
}

console.log(solution(4, 2));
