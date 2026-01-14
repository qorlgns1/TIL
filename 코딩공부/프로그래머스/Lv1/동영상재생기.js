function timeFormat(timeStr) {
  return timeStr
    .split(":")
    .map((v) => parseInt(v))
    .reduce((acc, cur, i) => {
      if (i === 0) {
        return cur * 60;
      }

      return acc + cur;
    }, 0);
}

function solution(video_len, pos, op_start, op_end, commands) {
  const VIDEO_LENGTH = timeFormat(video_len);
  const POS = timeFormat(pos);
  const OP_START = timeFormat(op_start);
  const OP_END = timeFormat(op_end);

  let now = POS >= OP_START && POS <= OP_END ? OP_END : POS;

  for (let i = 0; i < commands.length; i++) {
    const command = commands[i];

    if (command === "prev") {
      now = Math.max(now - 10, 0);
    }

    if (command === "next") {
      now = Math.min(now + 10, VIDEO_LENGTH);
    }

    if (now >= OP_START && now <= OP_END) {
      now = OP_END;
    }
  }

  const hour = Math.floor(now / 60);
  let min = now % 60;

  return `${hour < 10 ? "0" + hour : hour}:${min < 10 ? "0" + min : min}`;
}

console.log(solution("34:33", "13:00", "00:55", "02:55", ["next", "prev"]));
