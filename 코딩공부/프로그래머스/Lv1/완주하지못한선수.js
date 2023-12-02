function solution(participant, completion) {
  const map = new Map();

  for (let i = 0; i < participant.length; i++) {
    const person = participant[i];
    const personCount = map.get(person);
    if (personCount) {
      map.set(person, personCount + 1);
    } else {
      map.set(person, 1);
    }
  }

  for (let i = 0; i < completion.length; i++) {
    const person = completion[i];
    const personCount = map.get(person);

    if (personCount === 1) {
      map.delete(person);
    } else if (personCount >= 2) {
      map.set(person, personCount - 1);
    } else {
      return person;
    }
  }

  for (let item of map) {
    return item[0];
  }
}

const participant = [
  ["leo", "kiki", "eden"],
  ["marina", "josipa", "nikola", "vinko", "filipa"],
  ["mislav", "stanko", "mislav", "ana"],
];

const completion = [
  ["eden", "kiki"],
  ["josipa", "filipa", "marina", "nikola"],
  ["stanko", "ana", "mislav"],
];

for (let i = 0; i < participant.length; i++) {
  console.log(solution(participant[i], completion[i]));
}
