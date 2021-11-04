// 주어진 배열에 각 자리수를 더해서 가장 큰 숫자를 출력하기
// 각 자리수의 합이 동일하면 그 중 큰 수 출력

const arr = [128, 460, 603, 40, 521, 137, 123];
const arr1 = [111, 222, 333, 444, 555, 666, 777];

const solution = (arr) => {
  let bigNum = Number.MIN_SAFE_INTEGER;
  let bigSum = Number.MIN_SAFE_INTEGER;

  // for (let i = 0; i < arr.length; i++) {
  //   let compare = arr[i] + "";
  //   let compareSum = compare
  //     .split("")
  //     .reduce((a, b) => parseInt(a) + parseInt(b), 0);

  //   if (bigSum < compareSum) {
  //     bigNum = arr[i];
  //     bigSum = compareSum;
  //   } else if (bigSum === compareSum) {
  //     if (bigNum < arr[i]) {
  //       bigNum = arr[i];
  //     }
  //   }
  // }

  for (x of arr) {
    let compareSum = x
      .toString()
      .split("")
      .reduce((a, b) => parseInt(a) + parseInt(b), 0);

    if (bigSum < compareSum) {
      bigNum = x;
      bigSum = compareSum;
    } else if (bigSum === compareSum) {
      if (bigNum < x) {
        bigNum = x;
      }
    }
  }

  console.log(bigNum);
};

solution(arr);
