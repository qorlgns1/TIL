const selfNumber = (num) => {
  let numStr = num.toString();
  let numArray = new Array();

  for (let i = 0; i < numStr.length; i++) {
    numArray.push(numStr[i]);
  }

  let result = numArray.reduce((p, c, i) => {
    return (p += parseInt(c));
  }, 0);

  return num + result;
};

let map = new Map();
for (let i = 1; i <= 10000; i++) {
  map.set(i, i);
}

for (let i = 1; i <= 10000; i++) {
  map.delete(selfNumber(i));
}

map.forEach((value) => console.log(value));
