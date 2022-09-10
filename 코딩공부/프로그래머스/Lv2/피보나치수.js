function solution(n) {
  let n1 = 0;
  let n2 = 1;

  let i = 1;
  let tmp = 0;
  while (i < n) {
    tmp = n2 % 1234567;
    n2 = (n2 % 1234567) + (n1 % 1234567);
    n1 = tmp;

    i++;
  }

  return n2 % 1234567;
}

console.log(solution(6));
