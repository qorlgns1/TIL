// 부분집합 구하기(이진트리 DFS)
// 1~3 까지의 부분집합을 구한다. 공집합은 제외하고 출력한다.

function solution(n) {
  const answer = [];
  const ch = new Array(n + 1).fill(0);

  function DFS(v) {
    if (v === n + 1) {
      let temp = '';
      for (let i = 1; i <= ch.length; i++) {
        if (ch[i] === 1) {
          temp += i + ' ';
        }
      }

      if (temp.length) {
        answer.push(temp.trim());
      }
    } else {
      ch[v] = 1;
      DFS(v + 1);
      ch[v] = 0;
      DFS(v + 1);
    }
  }

  DFS(1);

  return answer;
}

console.log(solution(3));
