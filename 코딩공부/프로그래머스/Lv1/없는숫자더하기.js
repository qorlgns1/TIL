function solution(numbers) {
  const totalSum = 45;
  return numbers.reduce((acc, cur) => acc - cur, totalSum);
}

// const numbers = [1, 2, 3, 4, 6, 7, 8, 0];
const numbers = [5, 8, 4, 0, 6, 7, 9];

console.log(solution(numbers));
