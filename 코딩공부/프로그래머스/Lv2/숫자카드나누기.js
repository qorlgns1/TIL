function findMeasure(num) {
  const measures = [];
  for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
      measures.push(i);
    }
  }

  return measures;
}

function solution(arrayA, arrayB) {
  arrayA.sort((a, b) => a - b);
  arrayB.sort((a, b) => a - b);

  const findMeasureArr = [arrayA[0], arrayB[0]];

  const measures = [];

  findMeasureArr.forEach((num) => {
    measures.push(...findMeasure(num));
  });

  measures.sort((a, b) => b - a);

  const LEN = measures.length;

  for (let i = 0; i < LEN; i++) {
    const target = measures[i];

    let check1 = true;
    let check2 = true;

    for (let j = 0; j < arrayA.length; j++) {
      if (arrayA[j] % target !== 0 || arrayB[j] % target === 0) {
        check1 = false;
        break;
      }
    }

    if (check1) {
      return target;
    }

    for (let j = 0; j < arrayA.length; j++) {
      if (arrayB[j] % target !== 0 || arrayA[j] % target === 0) {
        check2 = false;
        break;
      }
    }

    if (check2) {
      return target;
    }
  }

  return 0;
}

console.log(solution([3, 3], [3, 3]));
