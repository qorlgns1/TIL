function solution(arr) {
  const ch = new Array(arr.length).fill(0);
  const answer = [];
  let flag = false;

  function DFS(i) {
    if (flag) {
      return;
    }

    if (i >= arr.length) {
      // console.log(ch.join(' '));

      let sum = 0;
      ch.forEach((v, i) => {
        if (ch[i] > 0) {
          sum += arr[i];
        }
      });

      if (answer.indexOf(sum) > -1) {
        flag = true;
        // answer.push(sum);
      } else {
        answer.push(sum);
      }
    } else {
      ch[i] = 1;
      DFS(i + 1);
      ch[i] = 0;
      DFS(i + 1);
    }
  }

  DFS(0);
  return answer;
}

console.log(solution([1, 3, 5, 6, 7, 10]));
