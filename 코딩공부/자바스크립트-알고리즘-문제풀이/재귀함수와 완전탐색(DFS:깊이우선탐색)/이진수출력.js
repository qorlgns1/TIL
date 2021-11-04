// 이진수 출력하기.
const n = 11;

const solution = (n) => {
  let result = "";

  const DFS = (n) => {
    if (n === 0) {
      return;
    } else {
      DFS(Math.floor(n / 2));
      result += n % 2;
    }
  };

  DFS(n);

  console.log(result);
};

solution(n);
