function solution(prices) {
  var answer = [];

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] > prices[j]) {
        answer.push(j - i);
        break;
      }

      if (j === prices.length - 1) {
        answer.push(j - i);
      }
    }
  }
  return answer;
}

console.log(solution([1, 2, 3, 2, 3]));
