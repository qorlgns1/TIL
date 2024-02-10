function solution(n) {
  var answer = '';
  const numArr = ['4', '1', '2'];

  while (n > 0) {
    answer = numArr[n % 3] + answer;
    n = parseInt((n - 1) / 3);
  }
  return answer;
}
