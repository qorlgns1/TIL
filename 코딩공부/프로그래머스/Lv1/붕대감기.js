function solution(bandage, health, attacks) {
  const LAST_ATTACK_TIME = attacks.at(-1)[0];
  const attackDamages = Array.from({ length: LAST_ATTACK_TIME + 1 }).fill(0);

  attacks.forEach(([index, damage]) => {
    attackDamages[index] = damage;
  });

  const [CASTING_TIME, HEALING_PER_SECOND, ADDITIONAL_HEALING] = bandage;
  let nowHealth = health;
  let recoveryAmount = 0;

  const FIRST_ATTACK_INDEX = attacks[0][0];

  for (let i = FIRST_ATTACK_INDEX; i <= LAST_ATTACK_TIME; i++) {
    const damage = attackDamages[i];
    if (damage) {
      nowHealth = nowHealth - damage;
      recoveryAmount = 0;

      // 사망
      if (nowHealth <= 0) return -1;

      continue;
    }

    nowHealth = Math.min(nowHealth + HEALING_PER_SECOND, health);
    recoveryAmount++;

    if (recoveryAmount === CASTING_TIME) {
      nowHealth = Math.min(nowHealth + ADDITIONAL_HEALING, health);

      recoveryAmount = 0;
    }
  }

  return nowHealth;
}

console.log(
  solution([5, 1, 5], 30, [
    [2, 10],
    [9, 15],
    [10, 5],
    [11, 5],
  ])
);
