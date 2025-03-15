function solution(topping) {
  var answer = 0;

  const cheolsuToppingMap = new Map();
  const brotherToppingMap = new Map();

  topping.forEach((item) => {
    if (brotherToppingMap.has(item)) {
      brotherToppingMap.set(item, brotherToppingMap.get(item) + 1);
    } else {
      brotherToppingMap.set(item, 1);
    }
  });

  for (let i = 0; i < topping.length; i++) {
    const toppingItem = topping[i];

    if (brotherToppingMap.get(toppingItem)) {
      brotherToppingMap.set(
        toppingItem,
        brotherToppingMap.get(toppingItem) - 1
      );

      if (brotherToppingMap.get(toppingItem) === 0) {
        brotherToppingMap.delete(toppingItem);
      }

      cheolsuToppingMap.set(
        toppingItem,
        (cheolsuToppingMap.get(toppingItem) || 0) + 1
      );
    }

    if (cheolsuToppingMap.size === brotherToppingMap.size) {
      answer++;
    }
  }

  return answer;
}

const topping = [1, 2, 1, 3, 1, 4, 1, 2];
console.log(solution(topping));
