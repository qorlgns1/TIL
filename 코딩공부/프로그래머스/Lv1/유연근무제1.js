function isWeekend(num) {
  const day = num % 7;

  const SATURDAY = 6;
  const SUNDAY = 7;

  if (day % SATURDAY === 0 || day % SUNDAY === 0) {
    return true;
  }

  return false;
}

function checkLate(scheduleTime, arrivalTime) {
  return scheduleTime < arrivalTime;
}

function scheduleTimeFormat(schedule) {
  return Math.floor(schedule / 100) * 60 + (schedule % 100);
}

function solution(schedules, timelogs, startday) {
  var answer = 0;

  for (let i = 0; i < schedules.length; i++) {
    const schedule = schedules[i];
    const timelog = timelogs[i];

    const scheduleMinute = scheduleTimeFormat(schedule) + 10;
    let flag = true;
    let nowDay = startday;

    for (let j = 0; j < timelog.length; j++) {
      if (isWeekend(nowDay++)) {
        continue;
      }

      const arrivalMinute = scheduleTimeFormat(timelog[j]);

      const isLate = checkLate(scheduleMinute, arrivalMinute);

      if (isLate) {
        flag = false;
        break;
      }
    }

    if (flag) answer++;
  }

  return answer;
}

console.log(solution([600], [[610, 611, 609, 610]], 5));
