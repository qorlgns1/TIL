// N개의 자연수로 구성된 집합을 두개의 부분집합으로 나눌 때 합이 같은것이 있으면 YES를 출력 없으면 NO 출력
const solution = (arr) => {
  let result = "NO";
  const total = arr.reduce((a, b) => a + b, 0);
  let flag = 0;
  const n = arr.length;

  const DFS = (L, sum) => {
    if (flag) {
      return;
    }
    if (L === n) {
      if (total - sum === sum) {
        result = "YES";
        flag = 1;
      }
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  };

  DFS(0, 0);

  return result;
};

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
