// 오답
// function solution(weights) {
//   var answer = 0;

//   const weightsArray = weights.map((weight) => {
//     return [weight * 2, weight * 3, weight * 4];
//   });

//   for (let i = 0; i < weightsArray.length; i++) {
//     for (let j = i + 1; j < weightsArray.length; j++) {
//       let matched = false;

//       for (let k = 0; k < 3; k++) {
//         for (let l = 0; l < 3; l++) {
//           if (weightsArray[i][k] === weightsArray[j][l]) {
//             answer++;
//             matched = true;
//             break;
//           }
//         }

//         if (matched) break;
//       }
//     }
//   }

//   return answer;
// }

function solution(weights) {
  const RATIO = [1, 2, 3 / 2, 4 / 3];
  const map = new Map();

  return weights
    .sort((a, b) => b - a)
    .reduce((answer, weight) => {
      for (let j = 0; j < RATIO.length; j++) {
        const check = RATIO[j] * weight;

        if (map.get(check)) {
          answer += map.get(check);
        }
      }

      map.set(weight, (map.get(weight) || 0) + 1);

      return answer;
    }, 0);
}

function solution(weights) {
  const distanceRate = [1, 3 / 2, 2, 4 / 3];
  const memo = {};
  let answer = 0;

  weights.sort((a, b) => b - a);

  for (const el of weights) {
    distanceRate.forEach((x) => {
      const t = el * x;
      if (memo[t] !== undefined) answer += memo[t];
    });
    memo[el] = (memo[el] || 0) + 1;
  }
  return answer;
}

console.log(solution([100, 180, 360, 100, 270]));
