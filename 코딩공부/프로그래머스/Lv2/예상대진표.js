function solution(n, a, b) {
  let temp = Array.from({ length: n }, (_, i) => i + 1);
  let temp2 = [];

  let answer = 1;
  let i = 1;
  while (true) {
    if (i % 2 === 0) {
      const one = temp[i - 2];
      const two = temp[i - 1];
      i++;

      if ((a === one && b === two) || (a === two && b === one)) {
        return answer;
      }

      if (a === one || b === one) {
        temp2.push(one);
        continue;
      }

      if (a === two || b === two) {
        temp2.push(two);
        continue;
      }

      temp2.push(two);
    } else {
      if (i === temp.length + 1) {
        temp = [...temp2];
        temp2 = [];
        i = 1;
        answer++;
      }

      i++;
    }
  }
}

console.log(solution(8, 7, 4));
