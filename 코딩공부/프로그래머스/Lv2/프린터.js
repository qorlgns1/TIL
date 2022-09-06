function solution(priorities, location) {
  let answer = [];
  let waitList = priorities.map((x, i) => [x, i]);

  while (waitList.length) {
    const front = waitList.shift();
    if (front[0] >= Math.max(...waitList.map((x) => x[0]))) {
      answer.push(front[1]);
      if (front[1] === location) {
        break;
      }
    } else {
      waitList.push(front);
    }
  }

  return answer.indexOf(location) + 1;
}

// console.log(solution([7, 6, 5, 4, 3, 2, 1], 3));
// console.log(solution([1, 2, 3, 4, 5, 6, 7], 3));
// console.log(solution([2, 1, 1, 3, 2], 1));
console.log(solution([1, 1, 9, 1, 1, 1], 0));
