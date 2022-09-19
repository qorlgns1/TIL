function solution(s) {
  let lowerStr = s.toLowerCase();
  let splited = lowerStr.split(' ');
  let maped = splited.map((str) => {
    const firstStr = str[0]?.toUpperCase() || '';
    const 나머지 = str.slice(1);

    return firstStr + 나머지;
  });

  return maped.join(' ');
}

// console.log(solution('3people unFollowed me'));
console.log(solution(' a b  c cd'));
