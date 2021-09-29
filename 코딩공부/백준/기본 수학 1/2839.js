let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
let input = require('fs').readFileSync(filePath).toString().trim();

function solution(bag) {
  if (bag % 5 === 0) {
    console.log(bag / 5);
    return;
  }

  let cnt_5kg = 0;
  let cnt_3kg = 0;

  let max = Math.ceil(bag / 5);

  for (let i = 1; i <= max; i++) {
    let remain_3kg = bag - i * 5;

    if (remain_3kg >= 0 && remain_3kg % 3 === 0) {
      cnt_5kg = i;
      cnt_3kg = remain_3kg / 3;
    }
  }

  if (cnt_5kg === 0 && cnt_3kg === 0) {
    max = Math.ceil(bag / 3);
    for (let j = 1; j <= max; j++) {
      remain_5kg = bag - j * 3;

      if (remain_5kg >= 0 && remain_5kg % 5 === 0) {
        cnt_5kg = remain_5kg / 5;
        cnt_3kg = j;
      }
    }

    if (cnt_5kg === 0 && cnt_3kg === 0) {
      console.log(-1);
    } else {
      console.log(cnt_5kg + cnt_3kg);
      //console.log('cnt_5kg', cnt_5kg);
      //console.log('cnt_3kg', cnt_3kg);
    }
  } else {
    console.log(cnt_5kg + cnt_3kg);
    //console.log('cnt_5kg', cnt_5kg);
    //console.log('cnt_3kg', cnt_3kg);
  }
}

// for (let i = 3; i <= 100; i++) {
//   console.log('================================');
//   solution(i);
// }

solution(+input);
