function solution(t, p) {
  let arr = [];
  for (let i = 0; i < t.length - p.length + 1; i++) {
    let tmp = "";
    for (let j = i; j < p.length + i; j++) {
      tmp += t[j];
    }

    arr.push(parseInt(tmp));
  }

  return arr.filter((num) => num <= parseInt(p)).length;
}
