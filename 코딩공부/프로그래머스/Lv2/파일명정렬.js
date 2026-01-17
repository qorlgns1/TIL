function splitName(string, originalIndex) {
  const [head, number, tail] = string.split(/(\d+)(.*)$/);

  return [head.toUpperCase(), parseInt(number), tail, originalIndex];
}

function solution(files) {
  const fileGroup = files.map((file, i) => splitName(file, i));

  fileGroup.sort((a, b) => {
    const [aHead] = a;
    const [bHead] = b;

    return aHead < bHead ? -1 : aHead > bHead ? 1 : 0;
  });

  fileGroup.sort((a, b) => {
    const [aHead, aNumber] = a;
    const [bHead, bNumber] = b;

    if (aHead === bHead) {
      return aNumber - bNumber;
    }
  });

  console.log(fileGroup);

  fileGroup.sort((a, b) => {
    const [aHead, aNumber, , aIndex] = a;
    const [bHead, bNumber, , bIndex] = b;

    if (`${aHead}${aNumber}` === `${bHead}${bNumber}`) {
      return aIndex - bIndex;
    }
  });

  const answer = [];

  fileGroup.forEach(([, , , index]) => {
    answer.push(files[index]);
  });

  return answer;
}

console.log(
  solution([
    "img12.png",
    "img10.png",
    "img02.png",
    "img1.png",
    "IMG01.GIF",
    "img2.JPG",
  ])
);
