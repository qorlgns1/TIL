function solution(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(true);
    } else {
      stack.pop();
    }
  }

  return stack.length ? false : true;
}

console.log(solution(")()("));
