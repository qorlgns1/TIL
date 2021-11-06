function solution(s) {
  const half = Math.floor(s.length / 2) || 1;
  const result = [];
  const splitedArr = s.split("");
  for (let range = 1; range <= half; range++) {
    //범위대로 자른 배열 만들기
    const tmpArr = [];

    for (let start = 0; i < splitedArr.length; start += range) {
      const tmp = [...splitedArr];
      tmpArr.push(tmp.splice(start, range).join(""));
    }

    const tempResult = [];
    let p1 = 0;

    while (p1 < tmpArr.length) {
      let p2 = p1 + 1;
      while (tmpArr[p1] === tmpArr[p2]) {
        p2++;
      }

      if (p2 - p1 === 1) {
        tempResult.push(tmpArr[p1]);
      } else {
        tempResult.push(p2 - p1 + tmpArr[p1]);
      }

      p2--;
      p1 = p2 + 1;
    }

    result.push(tempResult.join(""));
  }

  result.sort((a, b) => a.length - b.length);
  console.log(result[0].length);
}

const s = "abcabcabcabcdededededede";
solution(s);
