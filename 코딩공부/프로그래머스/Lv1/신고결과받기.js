// 런타임 에러
// function solution(id_list, report, k) {
//   const result = new Array(id_list.length).fill(0);
//   const newReport = new Array(...new Set(report));
//   const reportedPeople = {};

//   newReport.map((reportInfo) => {
//     const [person, reportedPerson] = reportInfo.split(" ");

//     if (reportedPeople[reportedPerson]) {
//       reportedPeople[reportedPerson] = [
//         ...reportedPeople[reportedPerson],
//         person,
//       ];
//     } else {
//       reportedPeople[reportedPerson] = [person];
//     }
//   });

//   for (const reportedPerson in reportedPeople) {
//     if (reportedPeople[reportedPerson].length >= k) {
//       reportedPeople[reportedPerson].map((person) => {
//         const personIdx = id_list.indexOf(person);
//         console.log(1111, personIdx);
//         result[personIdx] = result[personIdx] + 1;
//       });
//     }
//   }

//   return result;
// }

function solution(id_list, report, k) {
  const result = new Array(id_list.length).fill(0);
  const reportedPeople = {};

  report.map((reportInfo) => {
    const [person, reportedPerson] = reportInfo.split(" ");

    if (reportedPeople[reportedPerson]) {
      reportedPeople[reportedPerson] = reportedPeople[reportedPerson].add(
        person.toString()
      );
    } else {
      const set = new Set();
      reportedPeople[reportedPerson] = set.add(person);
    }
  });

  for (const reportedPerson in reportedPeople) {
    if (reportedPeople[reportedPerson].size >= k) {
      new Array(...reportedPeople[reportedPerson]).map((person) => {
        const personIdx = id_list.indexOf(person);
        result[personIdx] = result[personIdx] + 1;
      });
    }
  }

  return result;
}

const id_list = ["muzi", "frodo", "apeach", "neo"];
const report = [
  "muzi frodo",
  "apeach frodo",
  "frodo neo",
  "muzi neo",
  "apeach muzi",
];
// const report = ["ryan con", "ryan con", "ryan con", "ryan con"];
const k = 2;

console.log(solution(id_list, report, k));
