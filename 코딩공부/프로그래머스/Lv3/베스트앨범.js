function solution(genres, plays) {
  var answer = [];
  const map = new Map();

  for (let i = 0; i < genres.length; i++) {
    const genre = genres[i];
    const play = plays[i];

    if (map.has(genre)) {
      const data = map.get(genre);

      map.set(genre, {
        totalPlay: data.totalPlay + play,
        plays: [...data.plays, [i, play]],
      });
    } else {
      map.set(genre, {
        totalPlay: play,
        plays: [[i, play]],
      });
    }
  }

  const ranks = [];

  for (const [key, val] of map) {
    ranks.push([key, val.totalPlay]);
  }

  ranks.sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < ranks.length; i++) {
    const [genre] = ranks[i];

    const { plays } = map.get(genre);

    plays.sort((a, b) => {
      if (b[1] === a[1]) {
        return a[0] - b[0];
      }
      return b[1] - a[1];
    });

    if (plays.length === 1) {
      const [index] = plays[0];
      answer.push(index);
    } else {
      for (let j = 0; j < 2; j++) {
        const [index] = plays[j];
        answer.push(index);
      }
    }
  }

  return answer;
}

const genres = ["classic", "pop", "classic", "classic", "pop"];
const plays = [500, 600, 150, 800, 2500];

console.log(solution(genres, plays));
