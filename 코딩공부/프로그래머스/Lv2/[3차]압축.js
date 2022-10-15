function solution(msg) {
  const answer = [];
  const dic = new Array(26).fill().map((_, i) => String.fromCharCode(i + 65));

  for (let i = 0; i < msg.length; i++) {
    const sIndex = dic.indexOf(msg[i]);
    let num = i + 1;
    let wc = msg[i] + msg[num++];
    if (dic.indexOf(wc) === -1) {
      answer.push(sIndex + 1);
      dic.push(wc);
    } else {
      while (true) {
        wc += msg[num++] || '';

        i++;
        if (dic.indexOf(wc) === -1) {
          dic.push(wc);
          answer.push(dic.indexOf(wc.substring(0, wc.length - 1)) + 1);
          break;
        }

        if (num === msg.length + 1) {
          answer.push(dic.indexOf(wc) + 1);
          break;
        }
      }
    }
  }
  return answer;
}

console.log(solution('TOBEORNOTTOBEORTOBEORNOT'));
