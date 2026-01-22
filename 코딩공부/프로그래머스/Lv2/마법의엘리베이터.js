function solution(storey) {
  let moveCount = 0;
  const digits = `${storey}`.split("").map(Number);

  while (digits.length) {
    const currentDigit = digits.pop();

    if (currentDigit < 5) {
      moveCount += currentDigit;
    } else if (currentDigit > 5) {
      moveCount += 10 - currentDigit;

      if (digits.length) {
        digits[digits.length - 1] += 1;
      } else {
        digits.push(1);
      }
    } else {
      // currentDigit === 5
      const nextDigit = digits.length ? digits[digits.length - 1] : 0;
      moveCount += 5;
      
      if (nextDigit >= 5) {
        digits[digits.length - 1] += 1;
      }
    }
  }

  return moveCount;
}

console.log(solution(556));
