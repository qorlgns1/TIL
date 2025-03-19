function formatTime(time) {
  let newTime = Math.floor(time / 100) * 60 + (time % 100) + 10;
  return Math.floor(newTime / 60) * 100 + (newTime % 60);
}

function solution(schedules, timelogs, startday) {
  const win = Array.from({ length: schedules.length }).fill(1);
  const WORK_DAY = [0, 1, 1, 1, 1, 1, 0, 0];

  for (let j = 0; j < timelogs[0].length; j++) {
    if (WORK_DAY[(startday + j) % 7] !== 1) continue;

    for (let k = 0; k < schedules.length; k++) {
      const schedule = schedules[k];
      const timelog = timelogs[k][j];

      if (formatTime(schedule) < timelog) {
        win[k] = 0;
      }
    }
  }
  return win.filter((winner) => winner).length;
}

console.log(
  solution(
    [730, 855, 700, 720],
    [
      [710, 700, 650, 735, 700, 931, 912],
      [908, 901, 805, 815, 800, 831, 835],
      [705, 701, 702, 705, 710, 710, 711],
      [707, 731, 859, 913, 934, 931, 905],
    ],
    1
  )
);
