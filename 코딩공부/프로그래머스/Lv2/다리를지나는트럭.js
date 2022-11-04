function solution(bridge_length, weight, truck_weights) {
  let answer = 1;
  let bridge = new Array(bridge_length - 1).fill(0);

  const firstTruck = truck_weights.shift();
  let bridgeSum = firstTruck;
  bridge.push(firstTruck);

  while (bridgeSum) {
    ++answer;

    const truck = bridge.shift();
    bridgeSum -= truck;

    if (
      bridgeSum + truck_weights[0] <= weight &&
      bridge.length + 1 <= bridge_length
    ) {
      const truck = truck_weights.shift();
      bridge.push(truck);
      bridgeSum += truck;
    } else {
      bridge.push(0);
    }
  }

  return answer;
}

console.log(solution(2, 10, [7, 4, 5, 6]));

// while (bridgeSum) {
//   ++answer;

//   if (bridge.length > queueMaxLen) {
//     bridge.shift();
//   }

//   const tempTruck_weights = [...truck_weights];
//   const checkTruck = tempTruck_weights.shift();

//   if (
//     bridge.filter((truck) => truck > 0).length <= queueMaxLen - 1 &&
//     bridge.reduce((a, c) => a + c, checkTruck) <= weight
//   ) {
//     bridge.push(checkTruck);
//     truck_weights = tempTruck_weights;
//   } else {
//     bridge.push(0);

//     if (bridge.filter((truck) => truck > 0).length) {
//       bridge = [];
//     }
//   }
// }
