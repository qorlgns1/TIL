// 내가 푼 주차요금 계산 문제풀이 과정
// 1. records의 자동차번호와 시간을 각각의 배열에 같은 인덱스로 정리한다.
// 2. [[자동차번호1, 시간], [자동차번호2, 시간]] 이런 형태로 자동차번호와 시간을 합치고 자동차번호를 가지고 오름차순으로 정렬해준다. arr.sort((a,b) => a[0] - b[0]);
// 3. 정렬되면 map 함수를 이용해서 시간만 뽑아내서 사용한다.
// 4. 위에서 정리된주차내역을 forEach를 돌면서 출차내역이 없으면 즉 주차시간.length % 2 === 1 이면 ’23:59’를 push 해준다.

// - 지금까지 정리된 배열
// [
//   [ '06:00', '06:34', '18:59', '23:59' ],
//   [ '07:59', '19:09' ],
//   [ '05:34', '07:59', '22:59', '23:00' ]
// ]

// 5. 위 정보를 2중 for문으로 순회해서 주차 시간을 누적해준다.
// 6. 주차시간이 기본시간보다 작거나 같으면 기본 요금을 내고, 그렇지 않으면 문제에 나와있는 공식대로 계산을 한다.

// 다른 사람이 푼 주차요금 계산 문제풀이 과정
// 1. records 정보를 각각의 정보로 잘라서 배열을 만든다음 차량번호가 같으면 입출차시간으로 정렬하고 차량번호가 다르면 차량번호 순으로 정렬을 했다.
// 2. for문을 뒤에서 부터 돌면서 나간 기록이 있는 차량은 입출차 기록으로 시간계산을 하고, 나간 기록이 없으면 ‘’23:59’ 으로 계산해서 나간 시간을 측정한다.
// 3. for문을 뒤에서 부터 돌았기때문에, answer 배열에 앞에서부터 unshift 함수로 넣어준다.

// function 내역정리하기(주차내역정보들) {
//   const 주차내역자동차번호 = []; // [자동차1, 자동차2, 자동차3]
//   const 주차내역시간 = []; // [[in, out, in, out,], [in, out]];

//   for (let i = 0; i < 주차내역정보들.length; i++) {
//     const [시간, 차번호, 입출차] = 주차내역정보들[i].split(' ');

//     if (!주차내역자동차번호.includes(차번호)) {
//       주차내역자동차번호.push(차번호);
//       주차내역시간.push([시간]);
//     } else {
//       const 자동차인덱스 = 주차내역자동차번호.indexOf(차번호);
//       주차내역시간[자동차인덱스].push(시간);
//     }
//   }

//   return 주차내역자동차번호
//     .map((_, i) => [주차내역자동차번호[i], 주차내역시간[i]])
//     .sort((a, b) => a[0] - b[0])
//     .map((v) => v[1]);
// }

// function solution(fees, records) {
//   const answer = [];
//   let 정리된주차내역시간 = 내역정리하기(records);

//   정리된주차내역시간 = 정리된주차내역시간.map((주차시간) => {
//     if (주차시간.length % 2 === 1) {
//       주차시간.push('23:59');
//     }

//     return 주차시간;
//   });

//   for (let i = 0; i < 정리된주차내역시간.length; i++) {
//     let 시간누적 = 0;
//     let 주차내역시간 = 정리된주차내역시간[i];
//     for (let j = 주차내역시간.length - 1; j >= 0; j = j - 2) {
//       const [outHH, outMM] = 주차내역시간[j].split(':');
//       const [inHH, inMM] = 주차내역시간[j - 1].split(':');
//       시간누적 += +outHH * 60 + +outMM - (+inHH * 60 + +inMM);
//     }

//     if (fees[0] >= 시간누적) {
//       answer.push(fees[1]);
//     } else {
//       answer.push(
//         fees[1] + Math.ceil((시간누적 - fees[0]) / fees[2]) * fees[3]
//       );
//     }
//   }

//   return answer;
// }

// console.log(
//   solution(
//     [180, 5000, 10, 600],
//     [
//       '05:34 5961 IN',
//       '06:00 0000 IN',
//       '06:34 0000 OUT',
//       '07:59 5961 OUT',
//       '07:59 0148 IN',
//       '18:59 0000 IN',
//       '19:09 0148 OUT',
//       '22:59 5961 IN',
//       '23:00 5961 OUT',
//     ]
//   )
// );

// console.log(
//   solution(
//     [120, 0, 60, 591],
//     [
//       '16:00 3961 IN',
//       '16:00 0202 IN',
//       '18:00 3961 OUT',
//       '18:00 0202 OUT',
//       '23:58 3961 IN',
//     ]
//   )
// );

// --------------

function solution(fees, records) {
  var answer = [];

  const getNumberTime = (time) => {
    const arr = time.split(':');
    return Number.parseInt(arr[0]) * 60 + Number.parseInt(arr[1]);
  };

  const getParkTime = (start, end) => {
    return getNumberTime(end) - getNumberTime(start);
  };

  const getTotalFee = (time) => {
    // 기본 시간
    let cost = fees[1];
    time -= fees[0];

    // 추가 단위 시간
    if (time > 0) {
      cost += Math.ceil(time / fees[2]) * fees[3];
    }

    return cost;
  };

  const park = records
    .map((item) => item.split(' '))
    .sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));

  let time = 0;
  for (let i = park.length - 1; i >= 0; i--) {
    if (park[i][2] === 'IN') {
      // 나간 기록이 없는 차량
      time += getParkTime(park[i][0], '23:59');
    } else {
      // 나간 기록이 있는 차량
      time += getParkTime(park[i - 1][0], park[i][0]);
      i--;
    }

    // 차량 종류가 바뀌면 answer 맨 앞에 주차 요금 추가
    if (i === 0 || park[i][1] !== park[i - 1][1]) {
      answer.unshift(getTotalFee(time));
      time = 0;
    }
  }
  return answer;
}

console.log(
  solution(
    [180, 5000, 10, 600],
    [
      '05:34 5961 IN',
      '06:00 0000 IN',
      '06:34 0000 OUT',
      '07:59 5961 OUT',
      '07:59 0148 IN',
      '18:59 0000 IN',
      '19:09 0148 OUT',
      '22:59 5961 IN',
      '23:00 5961 OUT',
    ]
  )
);
