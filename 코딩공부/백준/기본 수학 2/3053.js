let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../예제.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const fillDecimal = (param) => {
  const str = param.toString();
  return str.length < 6 ? str.padEnd(6, "0") : str;
};

const splitDecimal = (num) => {
  return num.toString().split(".");
};

const findResult = (result) => {
  const ROUND_RANGE = 1000000;
  return Math.round(result * ROUND_RANGE) / ROUND_RANGE;
};

const fillResult = (arr) => {
  const integer = arr[0];
  const decimal = arr[1] || 0;

  const result = `${integer}.${fillDecimal(decimal)}`;
  return result;
};

const findEuclid = (num) => {
  const PI = Math.PI;
  const euclid = findResult(PI * num ** 2);
  const resultEuclid = fillResult(splitDecimal(euclid));
  console.log(resultEuclid);
};

const findTaxi = (num) => {
  const taxi = findResult(2 * num ** 2);
  const resultTaxi = fillResult(splitDecimal(taxi));
  console.log(resultTaxi);
};

findEuclid(+input);
findTaxi(+input);
