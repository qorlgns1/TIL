function solution(citations) {
  citations.sort((a, b) => b - a);

  let answers = 0;
  for (let i = 0; i < citations.length; i++) {
    if (i < citations[i]) {
      answers++;
    } else {
      break;
    }
  }

  return answers;
}

const citations = [9, 8, 7, 6, 4, 3, 2, 1, 0];
console.log(solution(citations));
