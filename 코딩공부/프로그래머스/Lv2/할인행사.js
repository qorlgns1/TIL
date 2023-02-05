function solution(want, number, discount) {
  let count = 0;
  const wantObj = {};
  for (let i = 0; i < want.length; i++) {
    wantObj[want[i]] = number[i];
  }

  const numberLenth = number.reduce((a, c) => a + c, 0);
  for (let i = 0; i < discount.length - 9; i++) {
    const wantObjCopy = { ...wantObj };
    for (let j = i; j < numberLenth + i; j++) {
      const discountItem = discount[j];
      if (wantObjCopy[discountItem] && wantObjCopy[discountItem] > 0) {
        wantObjCopy[discountItem] = wantObjCopy[discountItem] - 1;
      } else {
        break;
      }

      if (j === numberLenth + i - 1) {
        count++;
      }
    }
  }

  return count;
}

const want = ["banana", "apple", "rice", "pork", "pot"];
const number = [3, 2, 2, 2, 1];
const discount = [
  "chicken",
  "apple",
  "apple",
  "banana",
  "rice",
  "apple",
  "pork",
  "banana",
  "pork",
  "rice",
  "pot",
  "banana",
  "apple",
  "banana",
];

console.log(solution(want, number, discount));
