function solution(n) {
  let answer = n + 1;
  const countOne = n.toString(2).match(/1/g).length;

  while (true) {
    let c = answer.toString(2).match(/1/g).length;
    if (countOne === c) {
      return answer;
    }

    answer++;
  }
}

console.log(solution(78));
