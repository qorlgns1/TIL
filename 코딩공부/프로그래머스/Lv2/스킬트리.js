function solution(skill, skill_trees) {
  var answer = 0;

  const requiredSkillOrder = skill.split('');
  const requiredSkillfilteredTrees = skill_trees.map((skill_tree) => {
    const skill_tree_arr = skill_tree.split('');
    return skill_tree_arr.filter((alphabet) => {
      return requiredSkillOrder.includes(alphabet);
    });
  });

  for (let i = 0; i < requiredSkillfilteredTrees.length; i++) {
    let isAllow = true;

    for (let j = 0; j < requiredSkillfilteredTrees[i].length; j++) {
      if (requiredSkillfilteredTrees[i][j] !== requiredSkillOrder[j]) {
        isAllow = false;
      }
    }

    if (isAllow) answer++;
  }

  return answer;
}

const skill = 'CBD';
const skill_trees = ['BACDE', 'CBADF', 'AECB', 'BDA'];

console.log(solution(skill, skill_trees));
