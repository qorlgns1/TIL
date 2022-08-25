function solution(array, commands) {
  const result = [];
  commands.forEach((command) => {
    const [begin, end, location] = command;
    const slicedArr = array.slice(begin - 1, end, location);
    const sortedArr = slicedArr.sort((a, b) => a - b);

    result.push(sortedArr[location - 1] || "");
  });

  return result;
}
