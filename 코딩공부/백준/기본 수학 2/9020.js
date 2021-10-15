let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
let [L, ...InputArr] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => {
    return (v = Number(v.trim()));
  });

//console.log(L, I);

// const InputArr = [];
// for (let i = 4; i <= 100; i = i + 2) {
//   InputArr.push(i);
// }
// const L = InputArr.length;

const checkSosu = (num) => {
  let max = Math.ceil(Math.sqrt(num));

  for (let i = 2; i <= max; i++) {
    if (!(num % i)) {
      return false;
    }
  }
  return true;
};

const findSosuByEven = (evenNum) => {
  const sosuArray = [2, 3];
  for (let i = 5; i < evenNum; i = i + 2) {
    if (checkSosu(i)) {
      sosuArray.push(i);
    }
  }

  return sosuArray;
};

const findCorrectAddValue = (arr, val) => {
  const maxMinArr = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] + arr[j] === val) {
        const tempArray = [];
        tempArray.push(arr[i]);
        tempArray.push(arr[j]);
        tempArray.push(Math.abs(arr[j] - arr[i]));
        maxMinArr.push(tempArray);
      }
    }
  }

  return maxMinArr;
};

const findResult = (array) => {
  finalIndex = 0;
  array.reduce((acc, cur, i) => {
    if (cur[2] < acc) {
      finalIndex = i;
      return cur[2];
    }
  }, 10000000000);
  return finalIndex;
};

for (let i = 0; i < L; i++) {
  const sosuArr = findSosuByEven(InputArr[i]);

  const INPUT_VALUE = InputArr[i];
  addValueArray = findCorrectAddValue(sosuArr, INPUT_VALUE);

  let finalIndex = 0;
  finalIndex = findResult(addValueArray);

  console.log(`${addValueArray[finalIndex][0].toString()} ${addValueArray[finalIndex][1].toString()}`);
}
