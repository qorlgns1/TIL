function 소수찾기(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.ceil(Math.sqrt(num)); i++) {
    if (num !== i && num % i === 0) {
      return false;
    }
  }

  return true;
}

function solution(numbers) {
  const answer = [];
  const arr = numbers.split('');
  const makeStrChangeNumArr = new Set();
  const ch = new Array(arr.length).fill(0);

  function DFS(L, word) {
    if (L === arr.length) {
      return;
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;

          const newWord = word + arr[i];
          makeStrChangeNumArr.add(parseInt(newWord));

          DFS(L + 1, newWord);

          ch[i] = 0;
        }
      }
    }
  }

  DFS(0, '');

  for (let num of makeStrChangeNumArr) {
    if (소수찾기(num)) {
      answer.push(num);
    }
  }

  return answer.length;
}

console.log(solution('011'));
