// function solution(files) {
//   let answer = [];
//   files = files.map((file) => file.toUpperCase());
//   console.log(files);

//   //   return;

//   files.sort((a, b) => {
//     const regexp = /[a-z]*/gi;
//     const matches1 = [...a.matchAll(regexp)];
//     const matches2 = [...b.matchAll(regexp)];

//     let matches1StrFirstIndex = 0;
//     let matches1NumberFirstIndex = 0;
//     let matches1나머지의strFirstIndex = 0;

//     for (let i = 1; i < matches1.length; i++) {
//       const [word, indexStr] = matches1[i];

//       if (!word) {
//         continue;
//       }

//       matches1NumberFirstIndex = i - 1;
//       matches1나머지의strFirstIndex = i;
//     }
//     console.log(a);
//     console.log(a.substring(matches1StrFirstIndex, matches1NumberFirstIndex));
//     console.log(
//       a.substring(matches1NumberFirstIndex, matches1나머지의strFirstIndex + 1)
//     );
//     console.log(a.substring(matches1나머지의strFirstIndex + 1, a.length));
//     console.log("--------------------------");

//     // let matches2StrFirstIndex = 0;
//     // let matches2NumberFirstIndex = 0;
//     // let matches2나머지의strFirstIndex = 0;
//   });

//   let strFirstIndex = 0;
//   let numberFirstIndex = 0;
//   let 나머지의strFirstIndex = 0;
//   let 나머지의NumberFirstIndex = 0;
//   let 나머지의NumberLastIndex = 0;

//   files.map(to);

//   return answer;
// }

// function solution(files) {
//   let answer = [];
//   files = files.map((file) => file.toUpperCase());

//   files.sort((a, b) => {
//     const regexp = /[a-z]*/gi;

//     let numFirstIndexA = 0;
//     let numLastIndexA = 0;

//     for (let i = 1; i < a.length; i++) {
//       if (!isNaN(a[i])) {
//         numFirstIndexA = i;
//         break;
//       }
//     }

//     for (let i = numFirstIndexA + 1; i < a.length; i++) {
//       if (isNaN(a[i])) {
//         numLastIndexA = i;
//         break;
//       }
//     }

//     let numFirstIndexB = 0;
//     let numLastIndexB = 0;

//     for (let i = 1; i < a.length; i++) {
//       if (!isNaN(a[i])) {
//         numLastIndexB = i;
//         break;
//       }
//     }

//     for (let i = numLastIndexB + 1; i < a.length; i++) {
//       if (isNaN(a[i])) {
//         numLastIndexA = i;
//         break;
//       }
//     }

//     const aHead = a.substring(0, numFirstIndexA);
//     const bHead = b.substring(0, numFirstIndexB);

//     if (aHead !== bHead) {
//       return aHead - bHead;
//     }

//     const aNumber = parseInt(a.substring(numFirstIndexA, numLastIndexA));
//     const bNumber = parseInt(b.substring(numFirstIndexB, numLastIndexB));

//     if (aNumber !== bNumber) {
//       return aNumber - bNumber;
//     }

//     // console.log(a);
//     // console.log(a.substring(0, numLastIndexB));
//     // console.log(a.substring(numLastIndexB, numLastIndexA));
//     // console.log(a.substring(numLastIndexA, a.length));

//     // console.log("--------------------------");
//   });

//   return files;
// }

// 나중에 다시 풀어봐야함.
function solution(files) {
  return files.sort((a, b) => {
    const headerA = a.match(/^\D+/)[0].toLowerCase();
    const headerB = b.match(/^\D+/)[0].toLowerCase();

    if (headerA < headerB) {
      return -1;
    }
    if (headerA > headerB) {
      return 1;
    }

    const numberA = a.match(/\d+/)[0].replace(/^0+/, "");
    const numberB = b.match(/\d+/)[0].replace(/^0+/, "");

    return numberA - numberB;
  });
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
