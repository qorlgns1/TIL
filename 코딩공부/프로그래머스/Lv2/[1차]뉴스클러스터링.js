// function solution(str1, str2) {
//   let answer = 0;
//   const arr1 = [];
//   const arr2 = [];

//   const 교집합 = [];
//   const 합집합 = [];

//   str1 = str1.toUpperCase();
//   str2 = str2.toUpperCase();

//   str1 = str1.match(/[a-zA-Z]/g).join('');
//   str2 = str2.match(/[a-zA-Z]/g).join('');

//   for (let i = 0; i < str1.length - 1; i++) {
//     const str = str1[i] + str1[i + 1];

//     arr1.push(str);
//   }

//   for (let i = 0; i < str2.length - 1; i++) {
//     const str = str2[i] + str2[i + 1];

//     arr2.push(str);
//   }

//   const first = new Set(arr1);
//   const second = new Set(arr2);

//   const union = [...new Set([...first, ...second])]; //Set을 통해 일치하는거 제거 후 array로 변환
//   const intersect = [...first].filter((data) => second.has(data)); //[...first] 를 통해 array로 변환

//   if (!arr1.length && !arr2.length) {
//     return 1 * 65536;
//   }

//   return parseInt((intersect.length / union.length) * 65536);
// }

function solution(str1, str2) {
  var answer = 0;
  let compare1 = verifiedSlices(str1);
  let compare2 = verifiedSlices(str2);
  const union = new Set([...compare1, ...compare2]);
  let multiIntersectionLen = 0;
  let multiUnionLen = 0;
  for (const slice of union) {
    const compare1Count = compare1.filter((x) => x === slice).length;
    const compare2Count = compare2.filter((x) => x === slice).length;
    multiIntersectionLen += Math.min(compare1Count, compare2Count);
    multiUnionLen += Math.max(compare1Count, compare2Count);
  }
  answer =
    multiUnionLen === 0
      ? 65536
      : Math.floor((multiIntersectionLen / multiUnionLen) * 65536);
  return answer;
}

function verifiedSlices(str) {
  const onlyAlphabet = /[a-zA-Z]{2}/;
  let result = [];
  for (let i = 0; i < str.length - 1; i++) {
    const slice = str.slice(i, i + 2);
    if (onlyAlphabet.test(slice)) result.push(slice.toLowerCase());
  }
  return result;
}

console.log(solution('aa1+aa2', 'AAAA12'));
