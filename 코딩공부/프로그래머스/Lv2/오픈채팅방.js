const enter = (nickname) => {
  return `${nickname}님이 들어왔습니다.`;
};

const exit = (nickname) => {
  return `${nickname}님이 나갔습니다.`;
};

function solution(record) {
  const answer = [];
  const user = {};

  record.filter((v) => {
    const r = v.split(" ");
    if (r[0] === "Enter") {
      user[r[1]] = r[2];
    }
  });

  record.filter((v) => {
    const r = v.split(" ");
    if (r[0] === "Change") {
      user[r[1]] = r[2];
    }
  });

  const newRecord = record.map((v) => {
    const tmp = v.split(" ");

    if (tmp[0] === "Enter") {
      answer.push(enter(user[tmp[1]]));
      return enter(user[tmp[1]]);
    } else if (tmp[0] === "Leave") {
      answer.push(exit(user[tmp[1]]));
      return exit(user[tmp[1]]);
    }

    // if (!changeRecord[tmp[1]]) {
    //   user[tmp[1]] = tmp[2];
    // }else {
    //   user[changeRecord[tmp1]]
    // }

    // if (tmp[0] === "Enter") {
    //   return enter(changeRecord[tmp[1]]);
    // } else {
    //   return exit(changeRecord[tmp[1]]);
    // }
  });

  return answer;
}

solution([
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
]);
