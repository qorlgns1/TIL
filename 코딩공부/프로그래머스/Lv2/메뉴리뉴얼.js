// 내가 푼 정답
function generateCombinations(arr, length) {
  const result = [];

  function combine(current, start) {
    if (current.length === length) {
      result.push([...current]);
      return;
    }

    for (let i = start; i < arr.length; i++) {
      current.push(arr[i]);
      combine(current, i + 1);
      current.pop();
    }
  }

  combine([], 0);
  return result;
}

function solution(orders, course) {
  var answer = [];
  const map = new Map();

  orders.forEach((order) => {
    for (let j = 0; j < course.length; j++) {
      const combinations = generateCombinations(
        order.split('').sort(),
        course[j]
      );

      combinations.forEach((combination) => {
        const stringCombination = JSON.stringify(combination);
        const findCombinationFromMap = map.get(stringCombination);
        if (findCombinationFromMap) {
          map.set(stringCombination, findCombinationFromMap + 1);
        } else {
          map.set(stringCombination, 1);
        }
      });
    }
  });

  // key: 요리 length
  // value: {cook: [요리1, 요리2], orderCount: number}
  const map2 = new Map();

  for (const [key, value] of map) {
    if (value >= 2) {
      const arr = JSON.parse(key);

      const cookLength = map2.get(arr.length);
      const { orderCount, cook } = cookLength;

      if (cookLength) {
        if (value > orderCount) {
          map2.set(arr.length, {
            orderCount: value,
            cook: [arr],
          });
        } else if (value === orderCount) {
          map2.set(arr.length, {
            orderCount,
            cook: [...cook, JSON.parse(key)],
          });
        }
      } else {
        map2.set(arr.length, {
          orderCount: value,
          cook: [arr],
        });
      }
    }
  }

  for (const [_, { cook }] of map2) {
    for (let i = 0; i < cook.length; i++) {
      answer.push(cook[i].join(''));
    }
  }

  return answer.sort();
}

// 다른사람 정답
// function solution(orders, course) {
//   const ordered = {};
//   const candidates = {};
//   const maxNum = Array(10 + 1).fill(0);
//   const createSet = (arr, start, len, foods) => {
//     if (len === 0) {
//       ordered[foods] = (ordered[foods] || 0) + 1;
//       if (ordered[foods] > 1) candidates[foods] = ordered[foods];
//       maxNum[foods.length] = Math.max(maxNum[foods.length], ordered[foods]);
//       return;
//     }

//     for (let i = start; i < arr.length; i++) {
//       createSet(arr, i + 1, len - 1, foods + arr[i]);
//     }
//   };

//   orders.forEach((od) => {
//     // arr.sort는 기본적으로 사전식 배열
//     const sorted = od.split('').sort();
//     // 주문한 음식을 사전순으로 배열해서 문자열을 만든다.
//     // course에 있는 길이만 만들면 된다.
//     course.forEach((len) => {
//       createSet(sorted, 0, len, '');
//     });
//   });

//   const launched = Object.keys(candidates).filter(
//     (food) => maxNum[food.length] === candidates[food]
//   );

//   return launched.sort();
// }

const orders = [
  ['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'],
  ['ABCDE', 'AB', 'CD', 'ADE', 'XYZ', 'XYZ', 'ACD'],
  ['XYZ', 'XWY', 'WXA'],
];
const course = [
  [2, 3, 4],
  [2, 3, 5],
  [2, 3, 4],
];

for (let i = 0; i < orders.length; i++) {
  console.log(solution(orders[i], course[i]));
}

const a = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 4],
  [3, 1],
  [3, 2],
  [3, 4],
  [4, 1],
  [4, 2],
  [4, 3],
];
