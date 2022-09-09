const getDivisors = (num) => {
  const divisors = [];
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      divisors.push(i);
      // if (num / i != i) divisors.push(num / i);
    }
  }

  // return divisors.sort((a, b) => a - b);
  return divisors;
};

function solution(brown, yellow) {
  const 약수배열 = getDivisors(yellow);

  for (let i = 0; i < 약수배열.length; i++) {
    const 노랑세로 = 약수배열[i];
    const 노랑가로 = yellow / 노랑세로;

    const 갈색세로 = 노랑세로 + 2;
    const 갈색가로 = 노랑가로 + 2;

    if (brown === 갈색가로 * 갈색세로 - 노랑가로 * 노랑세로) {
      return [갈색가로, 갈색세로];
    }
  }
}

console.log(solution(24, 24));
