const initialArr = (rows, columns) => {
  const arr = [];

  for (let i = 0; i < rows; i++) {
    const temp = [];
    for (let j = 1; j < columns + 1; j++) {
      temp.push(i * columns + j);
    }

    arr.push(temp);
  }

  return arr;
};

function solution(rows, columns, queries) {
  var answer = [];
  let arr = initialArr(rows, columns);

  for (let i = 0; i < queries.length; i++) {
    const [startRow, startCol, endRow, endCol] = queries[i];
    const copyArr = JSON.parse(JSON.stringify(arr));
    let minNumber = Number.MAX_SAFE_INTEGER;

    for (let j = startCol; j < endCol; j++) {
      minNumber = Math.min(minNumber, arr[startRow - 1][j - 1]);

      copyArr[startRow - 1][j] = arr[startRow - 1][j - 1];
    }

    for (let j = startRow; j < endRow; j++) {
      minNumber = Math.min(minNumber, arr[j - 1][endCol - 1]);

      copyArr[j][endCol - 1] = arr[j - 1][endCol - 1];
    }

    for (let j = endCol; j > startCol; j--) {
      minNumber = Math.min(minNumber, arr[endRow - 1][j - 1]);
      copyArr[endRow - 1][j - 2] = arr[endRow - 1][j - 1];
    }

    for (let j = endRow; j > startRow; j--) {
      minNumber = Math.min(minNumber, arr[j - 1][startCol - 1]);
      copyArr[j - 2][startCol - 1] = arr[j - 1][startCol - 1];
    }

    arr = copyArr;
    answer.push(minNumber);
  }

  return answer;
}

const rows = [6, 3, 100];
const columns = [6, 3, 97];
const queries = [
  [
    [2, 2, 5, 4],
    [3, 3, 6, 6],
    [5, 1, 6, 3],
  ],
  [
    [1, 1, 2, 2],
    [1, 2, 2, 3],
    [2, 1, 3, 2],
    [2, 2, 3, 3],
  ],
  [[1, 1, 100, 97]],
];

for (let i = 0; i < queries.length; i++) {
  console.log(solution(rows[i], columns[i], queries[i]));
}
