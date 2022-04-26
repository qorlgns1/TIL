// ?��?��?�� ?��?��(postfix)
// ?��?��?��?��?��?�� 주어�?�? ?��?��?�� 결과�? 출력?��?�� ?��로그?��?�� ?��?��?��?��?��.
// 만약 3*(5+2)-9 ?�� ?��?��?��?��?��?���? ?��?��?���? 352+*9- �? ?��?��?���? �? 결과?�� 12?��?��?��.

// ?�� ?��?��?���?
// �? 줄에 ?��?��?��?��?��?�� 주어집니?��. ?��?��?��?�� 길이?�� 50?�� ?���? ?��?��?��?��.
// ?��??? 1~9?�� ?��?��??? +, -, *, / ?��?��?��로만 ?��루어진다.

// ?�� 출력?���?
// ?��?��?�� 결과�? 출력?��?��?��.

// ?�� ?��?��?��?�� 1
// 352+*9-

// ?�� 출력?��?�� 1
// 12

// function solution(s) {
//   let answer;
//   let stack = [];
//   for (let x of s) {
//     if (!isNaN(x)) {
//       stack.push(Number(x));
//     } else {
//       let rt = stack.pop();
//       let lt = stack.pop();
//       if (x === "+") {
//         stack.push(lt + rt);
//       } else if (x === "-") {
//         stack.push(lt - rt);
//       } else if (x === "*") {
//         stack.push(lt * rt);
//       } else if (x === "/") {
//         stack.push(lt / rt);
//       }
//     }
//   }
//   answer = stack[0];
//   return answer;
// }

const solution = (str) => {
  let stack = [];

  for (const ch of str) {
    if (!isNaN(ch)) {
      stack.push(parseInt(ch));
    } else {
      let rt = stack.pop();
      let lt = stack.pop();

      switch (ch) {
        case "+":
          stack.push(lt + rt);
          break;

        case "-":
          stack.push(lt - rt);
          break;

        case "*":
          stack.push(lt * rt);
          break;

        case "/":
          stack.push(lt / rt);
          break;

        default:
          return console.log("error");
      }
    }
  }

  return stack[0];
};

let str = "352+*9-";
console.log(solution(str));
