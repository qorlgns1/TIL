function solution(progresses, speeds) {
  const answer = [];

  let count = 0;
  let time = 0;
  for (let i = 0; i < progresses.length; i++) {
    const progress = progresses[i];
    const speed = speeds[i];
    const leadTime = Math.ceil((100 - progress) / speed);

    if (!count) {
      time = leadTime;
      count++;
    } else if (time >= leadTime) {
      count++;
    } else {
      answer.push(count);
      count = 1;
      time = leadTime;
    }
  }

  answer.push(count);

  return answer;
}

// console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
