// 시간이 오래걸려서 실패한 오답
// function solution(numbers) {
//   const LEN = numbers.length;
//   let tmp = -1;
//   const answer = [];

//   return numbers.map((number, i) => {
//     let has = false;
//     let j;

//     for (j = i + 1; j < LEN; j++) {
//       if (number < numbers[j]) {
//         has = true;
//         break;
//       }
//     }

//     return has ? numbers[j] : -1;
//   });
// }

function solution(numbers) {
  const stack = [];
  const ret = new Array(numbers.length);

  for (let i = 0; i < numbers.length; i++) {
    // 하강 직선일 때는 push
    // 스택이 비어있거나 이전 숫자가 더 크면
    if (stack.length === 0 || numbers[i] < numbers[i - 1]) {
      stack.push(i);
    } else {
      // 현재값보다 작은 index는 pop하여 현재값으로
      while (
        stack.length !== 0 &&
        numbers[stack[stack.length - 1]] < numbers[i]
      ) {
        ret[stack.pop()] = numbers[i];
      }
      stack.push(i);
    }
  }

  // // 나머지는 -1
  while (stack.length !== 0) {
    ret[stack.pop()] = -1;
  }

  return ret;
}

const n1 = [2, 3, 3, 5];
const n2 = [9, 1, 5, 3, 6, 2];

console.log(solution(n2));
