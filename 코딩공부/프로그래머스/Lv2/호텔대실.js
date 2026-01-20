// function solution(book_time) {
//   var answer = 0;

//   book_time = book_time.map(([start, end]) => {
//     return [start.split(":").map(Number), end.split(":").map(Number)];
//   });

//   book_time.sort((a, b) => {
//     const [s1, e1] = a;
//     const [s2, e2] = b;

//     const s1Minute = s1[0] * 60 + s1[1];
//     const s2Minute = s2[0] * 60 + s2[1];

//     const e1Minute = e1[0] * 60 + e1[1];
//     const e2Minute = e2[0] * 60 + e2[1];

//     if (s1Minute === s2Minute) {
//       return e1Minute - e2Minute;
//     }

//     return s1Minute - s2Minute;
//   });

//   console.log(book_time);

//   return answer;
// }

function solution(book_time) {
  const MAX_MINUTE = 1440;
  const CLEAN_TIME = 9;

  const schedules = Array.from({ length: book_time.length }, () =>
    Array.from({ length: MAX_MINUTE }, () => false)
  );

  for (let i = 0; i < book_time.length; i++) {
    const [start, end] = book_time[i].map((time) => {
      const [hour, minute] = time.split(":").map(Number);

      return hour * 60 + minute;
    });

    for (let j = start; j <= Math.min(end + CLEAN_TIME, MAX_MINUTE); j++) {
      schedules[i][j] = true;
    }
  }

  let answer = 0;

  for (let i = 0; i <= MAX_MINUTE; i++) {
    let roomCount = 0;

    for (let j = 0; j < schedules.length; j++) {
      const isReserve = schedules[j][i];
      if (isReserve) {
        roomCount++;
      }
    }

    answer = Math.max(answer, roomCount);
  }

  return answer;
}

console.log(
  solution([
    ["15:00", "17:00"],
    ["16:40", "18:20"],
    ["14:20", "15:20"],
    ["14:10", "19:20"],
    ["18:20", "21:20"],
  ])
);
