function solution(sizes) {
  let maxWidth = 0;
  let maxHight = 0;

  sizes.map((size) => {
    let [width, height] = size;
    if (width < height) {
      [width, height] = [height, width];
    }

    if (width > maxWidth) {
      maxWidth = width;
    }

    if (height > maxHight) {
      maxHight = height;
    }
  });

  return maxWidth * maxHight;
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);
