function solution(triangle) {
  const LEN = triangle.length;

  // 밑에서 2번째부터 시작 (신기한게 주석을 넣으면 시간초과로 실패하고 주석을 제거하면 성공함)
  for (let i = LEN - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      triangle[i][j] += Math.max(triangle[i + 1][j], triangle[i + 1][j + 1]);
    }
  }

  return triangle[0][0];
}

console.log(solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]));
