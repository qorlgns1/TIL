// function solution(tickets) {
//   const answer = [];
//   const ch = new Array(tickets.length).fill(0);
//   let queue = [];
//   tickets.sort();
//   console.log(tickets);

//   for (let i = 0; i < tickets.length; i++) {
//     const [출발, 도착] = tickets[i];
//     if (출발 === 'ICN') {
//       const size = queue.length;
//       const tmp = [];
//       for (let j = 0; j < size; j++) {
//         const goTicketInfo = queue[j];
//         if (도착 < goTicketInfo[0][1]) {
//           ch[goTicketInfo[1]] = 0;
//           tmp.push([tickets[i], i]);
//         }
//       }
//     }
//   }

//   tickets.forEach((ticket, i) => {
//     const [출발, 도착] = ticket;
//     if (출발 === 'ICN') {
//       if (queue.length !== 0) {
//         queue.forEach((ticketInfo, i) => {
//           if (도착 < ticketInfo[0][1]) {
//             ch[ticketInfo[1]] = 0;
//             queue.splice(i, 1);
//             queue.push([ticket, i]);
//           }
//         });
//       }

//       ch[i] = 1;
//       queue.push([ticket, i]);
//     }
//   });

//   console.log(queue);

//   // do {

//   // } while (1);
//   // {
//   // }

//   return answer;
// }

function solution(tickets) {
  let answer = [];
  const result = [];
  const visited = [];

  tickets.sort();

  const len = tickets.length;
  const dfs = (str, count) => {
    result.push(str);

    if (count === len) {
      answer = result;
      return true;
    }

    for (let i = 0; i < len; i++) {
      if (!visited[i] && tickets[i][0] === str) {
        visited[i] = true;

        if (dfs(tickets[i][1], count + 1)) return true;

        visited[i] = false;
      }
    }

    result.pop();

    return false;
  };

  dfs('ICN', 0);

  return answer;
}
[
  ['ICN', 'BBB'],
  ['BBB', 'AAA'],
  ['AAA', 'ICN'],
][(['ICN', 'BBB'], ['BBB', 'AAA'], ['AAA', 'ICN'])];
// function solution(tickets) {
//   var answer = [];
//   let n = tickets.length;
//   console.log(tickets.sort());

//   for (let i = 0; i < n; i++) {
//     if (tickets[i][0] === 'ICN') {
//       answer.push(tickets[i][0]);
//       answer.push(tickets[i][1]);
//       tickets.splice(i, 1);
//       break;
//     }
//   }
//   function DFS(L) {
//     if (tickets.length === 0) return true;
//     else {
//       for (let j = 0; j < tickets.length; j++) {
//         if (tickets[j][0] === answer[answer.length - 1]) {
//           answer.push(tickets[j][1]);
//           tickets.splice(j, 1);
//           DFS(L + 1);
//         }
//       }
//     }
//   }
//   DFS(0);
//   return answer;
// }

// const tickets = [
//   ['ICN', 'JFK'],
//   ['HND', 'IAD'],
//   ['JFK', 'HND'],
// ];
// console.log(solution(tickets));

console.log(
  solution([
    ['ICN', 'SFO'],
    ['ICN', 'ATL'],
    ['SFO', 'ATL'],
    ['ATL', 'ICN'],
    ['ATL', 'SFO'],
  ])
);

[
  ['ICN', 'AAA'],
  ['ICN', 'AAA'],
  ['ICN', 'AAA'],
  ['AAA', 'ICN'],
  ['AAA', 'ICN'],
];

// 예시2: 사전순으로 1순위아닌 다음 순위 길을 가는 경우
// parameters
// [["ICN", "A"], ["A", "B"], ["A", "C"], ["C", "A"], ["B", "D"]]

// return
// ["ICN", "A", "C", "A", "B", "D"]
