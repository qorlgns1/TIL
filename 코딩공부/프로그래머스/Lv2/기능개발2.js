function solution(progresses, speeds) {
  var answer = [];
  const finish = progresses.map((progress, i) => {
    const remain = 100 - progress;
    return Math.ceil(remain / speeds[i]);
  });

  let queue = [];
  while (finish.length) {
    const day = finish.shift();

    if (!queue.length || queue[0] >= day) {
      queue.push(day);
    } else {
      answer.push(queue.length);
      queue = [day];
    }
  }

  return [...answer, queue.length];
}

// console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
