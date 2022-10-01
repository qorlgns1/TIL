function solution(m, arr) {
  const answer = [];
  const ch = new Array(arr.length).fill(0);
  const temp = new Array(m.length).fill(0);

  function DFS(L) {
    if (L === m) {
      answer.push([...temp]);
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          temp[L] = arr[i];
          DFS(L + 1);
          ch[i] = 0;
        }
      }
    }
  }

  DFS(0);

  return answer;
}

console.log(solution(2, [3, 6, 9]));
