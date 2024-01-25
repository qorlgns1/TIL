function solution(priorities, location) {
  var answer = 0;
  const result = [];
  const queue = priorities.map((v, i) => [v, i]);

  while (queue.length) {
    const process = queue.shift();

    let findOtherProcess = false;
    for (let i = 0; i < queue.length; i++) {
      const otherProcess = queue[i];
      if (otherProcess[0] > process[0]) {
        queue.push(process);
        findOtherProcess = true;
        break;
      }
    }

    if (!findOtherProcess) {
      result.push(process);
    }
  }

  return result.findIndex(([_, i]) => i === location) + 1;
}

const priorities = [
  [2, 1, 3, 2],
  [1, 1, 9, 1, 1, 1],
];
const location = [2, 0];

for (let i = 0; i < priorities.length; i++) {
  console.log(solution(priorities[i], location[i]));
}
