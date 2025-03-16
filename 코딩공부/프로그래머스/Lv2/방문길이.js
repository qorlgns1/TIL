const move = (direction, position) => {
  if (direction === "U") {
    const [x, y] = position;
    if (x - 1 === -1) throw Error();

    return [x - 1, y];
  }

  if (direction === "D") {
    const [x, y] = position;
    if (x + 1 === 11) throw Error();

    return [x + 1, y];
  }

  if (direction === "L") {
    const [x, y] = position;
    if (y - 1 === -1) throw Error();

    return [x, y - 1];
  }

  if (direction === "R") {
    const [x, y] = position;
    if (y + 1 === 11) throw Error();

    return [x, y + 1];
  }
};

function solution(dirs) {
  const moveDirection = new Set();
  const moves = dirs.split("");

  let position = [5, 5];

  moves.forEach((direction) => {
    try {
      const nowDirection = [...position];
      const [x, y] = move(direction, position);

      moveDirection.add([...nowDirection, x, y].join(""));
      moveDirection.add([x, y, ...nowDirection].join(""));

      position = [x, y];
    } catch (e) {}
  });

  return moveDirection.size / 2;
}

const dirs =
  "UUUUUUUUUUUUUUDDDDDDDDDDDDDDDDDLLLLLLLLLLLLLLLLLLLLLLLLLLRRRRRRRRRRRRRRRRRRRRRRRRRRR";

console.log(solution(dirs));
