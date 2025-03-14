function solution(s) {
  s = s.replaceAll("{", "[");
  s = s.replaceAll("}", "]");

  const tuple = JSON.parse(s);
  const set = new Set();

  tuple.sort((a, b) => {
    return a.length - b.length;
  });

  tuple.forEach((arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (!set.has(arr[i])) {
        set.add(arr[i]);
        break;
      }
    }
  });

  return Array.from(set);
}

const s = "{{1,2,3},{2,1},{1,2,4,3},{2}}";
console.log(solution(s));
