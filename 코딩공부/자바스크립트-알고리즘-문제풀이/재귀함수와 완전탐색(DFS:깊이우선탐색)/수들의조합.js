function solution(k, m, arr) {
  const answer = [];
  const temp = [];
  function DFS(L, index, sum) {
    if (L === k && sum % m === 0) {
      answer.push([...temp]);
    } else {
      for (let i = index; i < arr.length; i++) {
        temp.push(arr[i]);
        DFS(L + 1, i + 1, sum + arr[i]);
        temp.pop();
      }
    }
  }

  DFS(0, 0, 0);

  return answer.length;
}

console.log(solution(3, 6, [2, 4, 5, 8, 12]));
