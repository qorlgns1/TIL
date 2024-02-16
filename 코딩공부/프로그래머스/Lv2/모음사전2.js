function solution(word) {
  const ALPHABET = ['A', 'E', 'I', 'O', 'U'];
  let count = 0;
  let isFind = false;

  function DFS(makedWord) {
    if (makedWord === word) {
      isFind = true;
      return;
    }

    if (makedWord.length >= 5) {
      return;
    }

    for (let i = 0; i < ALPHABET.length; i++) {
      if (!isFind) {
        count++;
        DFS(`${makedWord}${ALPHABET[i]}`);
      }
    }
  }

  DFS('');

  return count;
}

const word = ['AAAAE', 'AAAE', 'I', 'EIO'];
for (let i = 0; i < word.length; i++) {
  console.log(solution(word[i]));
}
