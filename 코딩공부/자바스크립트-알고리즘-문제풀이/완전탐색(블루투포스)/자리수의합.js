// 자릿수의 합

// N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고, 그 합이 최대인 자연수를 출력
// 하는 프로그램을 작성하세요. 자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다.
// 만약 235 와 1234가 동시에 답이 될 수 있다면 1234를 답으로 출력해야 합니다.

// ▣ 입력설명
// 첫 줄에 자연수의 개수 N(3<=N<=100)이 주어지고, 그 다음 줄에 N개의 자연수가 주어진다.
// 각 자연수의 크기는 10,000,000를 넘지 않는다.

// ▣ 출력설명
// 자릿수의 합이 최대인 자연수를 출력한다.

// ▣ 입력예제 1
// 7
// 128 460 603 40 521 137 123

// ▣ 출력예제 1
// 137

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

  return bigNum;
};

const solution1 = (arr) => {
  let max = Number.MIN_SAFE_INTEGER;
  let maxSum = Number.MIN_SAFE_INTEGER;

  for (const n of arr) {
    let sum = 0;
    let temp = n;
    while (temp > 0) {
      sum += temp % 10;
      temp = Math.floor(temp / 10);
    }

    if (sum > maxSum) {
      max = n;
      maxSum = sum;
    } else if (sum === maxSum) {
      max = Math.max(n, max);
    }
  }

  return max;
};

let arr = [128, 460, 603, 40, 521, 137, 123];

console.log(solution1(arr));
