// 1부터 N까지 합 출력하기

// 자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성하세요.

// ▣ 입력설명
// 첫 번째 줄에 20이하의 자연수 N이 입력된다..

// ▣ 출력설명
// 첫 번째 줄에 1부터 N까지의 합을 출력한다.

// ▣ 입력예제 6
// ▣ 출력예제 21

// ▣ 입력예제 10
// ▣ 출력예제 55

const solution = (n) => {
  let answer = 0;
  if (!(n % 2)) {
    answer = ((1 + n) * n) / 2;
  } else {
    answer = (1 + n) * Math.floor(n / 2) + (Math.floor(n / 2) + 1);
  }

  return answer;
};

console.log(solution(1));
