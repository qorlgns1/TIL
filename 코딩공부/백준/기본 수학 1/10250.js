let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../예제.txt";
let [L, ...A] = fs.readFileSync(filePath).toString().trim().split("\n");

for (let i = 0; i < Number(L); i++) {
  let [a, b, c] = A[i]
    .trim()
    .split(" ")
    .map((v) => Number(v));
  let floor = Math.ceil(c % a);
  if (floor === 0) {
    floor = String(a);
  }
  let ho = Math.ceil(c / a);
  if (ho < 10) {
    ho = "0" + String(ho);
  } else {
    ho = String(ho);
  }

  console.log(floor + ho);
}
