function calculateServer(player, m, serverCount) {
  return Math.max(Math.floor(player / m) - serverCount, 0);
}

function solution(players, m, k) {
  var answer = 0;

  const DAY = 24;
  const checkServers = Array.from({ length: 24 }, () => 0);

  for (let i = 0; i < DAY; i++) {
    const player = players[i];
    const checkServer = checkServers[i];

    const addServer = calculateServer(player, m, checkServer);

    if (addServer) {
      for (let j = 0; j < k; j++) {
        checkServers[i + j] += addServer;
      }
    }

    answer += addServer;
  }

  return answer;
}

console.log(
  solution(
    [0, 2, 3, 3, 1, 2, 0, 0, 0, 0, 4, 2, 0, 6, 0, 4, 2, 13, 3, 5, 10, 0, 1, 5],
    3,
    5
  )
);
