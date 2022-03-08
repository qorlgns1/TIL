// Hash & Sliding Window && Two Pointers Algorithm 이용
// 모든 아나그램 찾기(해쉬, 투포인터, 슬라이딩 윈도우)

// S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하는 프로그램을 작성하
// 세요. 아나그램 판별시 대소문자가 구분됩니다. 부분문자열은 연속된 문자열이어야 합니다.

// ▣ 입력설명
// 첫 줄에 첫 번째 S문자열이 입력되고, 두 번째 줄에 T문자열이 입력됩니다.
// S문자열의 길이는 10,000을 넘지 않으며, T문자열은 S문자열보다 길이가 작거나 같습니다.

// ▣ 출력설명
// S단어에 T문자열과 아나그램이 되는 부분문자열의 개수를 출력합니다.

// ▣ 입력예제 1
// bacaAacba
// abc

// ▣ 출력예제 1
// 3

const solution = (S, T) => {
  let answer = 0;

  let map1 = new Map();
  let map2 = new Map();

  T.split("").forEach((e) => {
    if (map2.get(e)) {
      map2.set(e, map2.get(e) + 1);
    } else {
      map2.set(e, 1);
    }
  });

  for (let i = 0; i < T.length - 1; i++) {
    if (map1.get(S[i])) {
      map1.set(e, map1.get(S[i]) + 1);
    } else {
      map1.set(S[i], 1);
    }
  }

  for (let i = T.length - 1; i < S.length; i++) {
    if (map1.has(S[i])) {
      map1.set(S[i], map1.get(S[i]) + 1);
    } else {
      map1.set(S[i], 1);
    }

    let tmpMap = new Map(map1);

    let chk = T.length;
    for (const [key, value] of map2) {
      if (tmpMap.get(key)) {
        tmpMap.set(key, tmpMap.get(key) - 1);
        if (tmpMap.get(key) < 0) {
          break;
        }
        chk--;
      } else {
        break;
      }
    }

    if (chk === 0) {
      answer++;
    }

    map1.set(S[i - T.length + 1], map1.get(S[i - T.length + 1]) - 1);
    if (map1.get(S[i - T.length + 1]) === 0) {
      map1.delete(S[i - T.length + 1]);
    }
  }

  return answer;
};

// const solution = (S, T) => {
//   let answer = 0;
//   let tmp = "";
//   for (let i = 0; i < T.length; i++) {
//     tmp += S[i];
//   }

//   for (let i = T.length - 1; i < S.length; i++) {
//     let map = new Map();

//     for (let j = 0; j < tmp.length; j++) {
//       if (map.has(tmp[j])) {
//         map.set(tmp[j], map.get(tmp[j]) + 1);
//       } else {
//         map.set(tmp[j], 1);
//       }
//     }

//     for (let k = 0; k < tmp.length; k++) {
//       if (!map.has(T[k]) || map.get(T[k]) === 0) {
//         break;
//       } else {
//         map.set(T[k], map.get(T[k]) - 1);
//       }

//       if (k === tmp.length - 1) {
//         answer++;
//       }
//     }

//     tmp = tmp.split("").splice(1, 3).join("") + S[i + 1];
//   }

//   return answer;
// };

// function compareMaps(map1, map2) {
//   if (map1.size !== map2.size) return false;
//   for (let [key, val] of map1) {
//     if (!map2.has(key) || map2.get(key) !== val) return false;
//   }
//   return true;
// }

// function solution(s, t) {
//   let answer = 0;
//   let tH = new Map();
//   let sH = new Map();
//   for (let x of t) {
//     if (tH.has(x)) tH.set(x, tH.get(x) + 1);
//     else tH.set(x, 1);
//   }
//   let len = t.length - 1;
//   for (let i = 0; i < len; i++) {
//     if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
//     else sH.set(s[i], 1);
//   }
//   let lt = 0;
//   for (let rt = len; rt < s.length; rt++) {
//     if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
//     else sH.set(s[rt], 1);
//     if (compareMaps(sH, tH)) answer++;
//     sH.set(s[lt], sH.get(s[lt]) - 1);
//     if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
//     lt++;
//   }
//   return answer;
// }

let a = "cbacaAacbac";
let b = "abc";
console.log(solution(a, b));
