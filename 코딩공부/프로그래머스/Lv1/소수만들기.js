function solution(nums) {
  var answer = 0;

  let len = nums.length;

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      for (let k = j + 1; k < len; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        if (isPrime(sum)) {
          answer++;
        }
      }
    }
  }
  console.log(answer);
  return answer;
}

function isPrime(sum) {
  for (let i = 2; i <= Math.sqrt(sum); i++) {
    if (sum % i === 0) return false;
  }
  return sum > 1;
}

solution([1, 2, 7, 6, 4]);
