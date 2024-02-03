const isRightString = (s) => {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (
      (s[i] === ']' && stack.at(-1) === '[') ||
      (s[i] === '}' && stack.at(-1) === '{') ||
      (s[i] === ')' && stack.at(-1) === '(')
    ) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return stack.length === 0 ? true : false;
};

function solution(s) {
  var answer = 0;
  const map = new Map();

  let copyS = s;
  for (let i = 0; i < s.length; i++) {
    if (map.get(copyS)) {
      answer++;
      continue;
    }

    if (map.get(copyS) === false) {
      continue;
    }

    if (isRightString(copyS)) {
      answer++;
      map.set(copyS, true);
    } else {
      map.set(copyS, false);
    }

    const splited = copyS.split('');
    splited.push(splited.shift());
    copyS = splited.join('');
  }
  return answer;
}

const s = ['[](){}', '[)(]', '}]()[{', '}}}'];

for (let i = 0; i < s.length; i++) {
  console.log(solution(s[i]));
}
