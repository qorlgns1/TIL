function solution(s) {
  var answer = s.split(" ");
  let result = [];

  answer.forEach((e) => {
    const new1 = e
      .split("")
      .map((v, i) => {
        if (i % 2) {
          return v.toLowerCase();
        } else {
          return v.toUpperCase();
        }
      })
      .join("");

    result.push(new1);
  });

  console.log(result.join(" "));

  return answer.join(" ");
}

solution("try hello world");
