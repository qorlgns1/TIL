// 실패
// function solution(people, limit) {
//   people.sort((a, b) => a - b);

//   const count = people.reduce((acc, cur) => {
//     if (cur <= limit / 2) {
//       return acc + 1;
//     }
//     return acc;
//   }, 0);

//   return people.length - count + Math.ceil(count / 2);
// }

function solution(people, limit) {
  people.sort((a, b) => a - b);
  let answer = 0;
  let lt = 0;
  let rt = people.length - 1;

  while (lt <= rt) {
    if (people[lt] + people[rt] > limit) {
      answer++;
      rt--;
    } else {
      answer++;
      lt++;
      rt--;
    }
  }

  return answer;
}

console.log(solution([70, 50, 80, 50], 100));
