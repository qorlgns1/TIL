function solution(numbers) {
  var answer = [];

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    const target = '0' + number.toString(2);

    if (target.at(-1) === '0') {
      answer.push(number + 1);
    } else {
      for (let j = target.length - 1; j >= 0; j--) {
        if (target[j] === '0') {
          const nextBigNum =
            target.substring(0, j) +
            '10' +
            target.substring(j + 2, target.length);

          answer.push(parseInt(nextBigNum, 2));
          break;
        }
      }
    }
  }

  return answer;
}

console.log(solution([2, 7]));
