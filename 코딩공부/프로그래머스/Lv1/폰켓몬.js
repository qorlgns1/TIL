function solution(nums) {
  const max = nums.length / 2;
  const numArr = [...new Set(nums)];
  return numArr.length > max ? max : numArr.length;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
