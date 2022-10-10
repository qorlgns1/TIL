function solution(cacheSize, cities) {
  let answer = 0;
  const HIT = 1;
  const MISS = 5;
  const cacheArr = [];

  if (!cacheSize) {
    return cities.length * miss;
  }

  cities = cities.map((city) => city.toLowerCase());

  for (let i = 0; i < cities.length; i++) {
    if (!cacheArr.slice(-1 * cacheSize).includes(cities[i])) {
      answer += miss;
      cacheArr.push(cities[i]);
    } else {
      answer += hit;

      cacheArr.push(
        ...cacheArr.slice(-1 * cacheSize).filter((a) => a !== cities[i])
      );
      cacheArr.push(cities[i]);
    }
  }

  return answer;
}

console.log(solution(2, ['Jeju', 'seoul', 'Jeju', 'Jeju', 'Jeju']));

console.log(
  solution(2, ['Jeju', 'Pangyo', 'NewYork', 'Pangyo', 'seoul', 'pangyo'])
);

// console.log(
//   solution(3, [
//     'Jeju',
//     'Pangyo',
//     'Seoul',
//     'NewYork',
//     'LA',
//     'Jeju',
//     'Pangyo',
//     'Seoul',
//     'NewYork',
//     'LA',
//   ])
// );
