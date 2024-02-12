function solution(order) {
  let lt = 0;
  const stack = [];

  for (let i = 1; i <= order.length; i++) {
    if (order[lt] !== i) {
      stack.push(i);
    } else {
      lt++;

      while (stack.length && stack.at(-1) === order[lt]) {
        stack.pop();
        lt++;
      }
    }
  }

  return lt;
}

// function solution(order) {
//   let answer = 0;
//   let stack = [];

//   for (let i = 1; i <= order.length; i++) {
//     stack.push(i);

//     while (stack.length > 0 && stack[stack.length - 1] === order[answer]) {
//       stack.pop();
//       answer++;
//     }
//   }

//   return answer;
// }

const order = [[2, 1, 4, 3]];

for (let i = 0; i < order.length; i++) {
  console.log(solution(order[i]));
}
