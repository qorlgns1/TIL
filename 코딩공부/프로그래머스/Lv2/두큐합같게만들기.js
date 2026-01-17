function solution(queue1, queue2) {
  let sum1 = queue1.reduce((acc, cur) => acc + cur, 0);
  let sum2 = queue2.reduce((acc, cur) => acc + cur, 0);

  const totalLen = queue1.length + queue2.length;
  const TOTAL_SUM = sum1 + sum2;
  if (TOTAL_SUM % 2 === 1) return -1;

  const queue = [[sum1, sum2, 0, 0, 0]];

  while (queue.length) {
    const [sum1, sum2, arr1Index, arr2Index, answer] = queue.shift();

    if (TOTAL_SUM / 2 === sum1) return answer;

    if (arr1Index > totalLen || arr2Index > totalLen) return -1;

    if (sum2 > sum1) {
      queue.push([
        sum1 + queue2[arr2Index],
        sum2 - queue2[arr2Index],
        arr1Index,
        arr2Index + 1,
        answer + 1,
      ]);

      queue1.push(queue2[arr2Index]);
    }

    if (sum1 > sum2) {
      queue.push([
        sum1 - queue1[arr1Index],
        sum2 + queue1[arr1Index],
        arr1Index + 1,
        arr2Index,
        answer + 1,
      ]);

      queue2.push(queue1[arr1Index]);
    }
  }

  return -1;
}

console.log(solution([3, 2, 7, 2], [4, 6, 5, 1]));
