// https://www.acmicpc.net/problem/13913
// https://brick-parrot-a90.notion.site/8a55b309b95644ecb8ce10ed383d34c1?v=fb2ba398fcf64bf9be61b87ff263c05b&p=0cb2feafb26b49768a94b75b335c1ef6&pm=c

//Queue 구현을 위한 노드 구현
class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}
//Queue 구현
class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }
  push(value) {
    const node = new Node(value);
    this.length++;
    if (this.length === 1) {
      this.front = node;
      this.rear = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }
  }
  shift() {
    const returnValue = this.front.data;
    this.front = this.front.next;
    this.length--;
    return returnValue;
  }
}

let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../예제.txt';
let [N, K] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

const MAX_LEN = 100000;
const ch = new Array(MAX_LEN + 1).fill(0);
ch[N] = 1;
const road = new Array(MAX_LEN + 1).fill(0);
road[N] = null;
const queue = new Queue();
queue.push([N, 0]);

let answer = [0, []];

while (queue.length) {
  const [x, cnt] = queue.shift();

  if (x === K) {
    const dist = [];
    let compare = x;
    while (road[compare] !== null) {
      dist.push(compare);
      compare = road[compare];
    }
    dist.push(N);
    dist.reverse();

    answer = [cnt, dist];
    break;
  } else {
    if (x * 2 <= MAX_LEN && !ch[x * 2]) {
      road[x * 2] = x;
      ch[x * 2] = 1;
      queue.push([x * 2, cnt + 1]);
    }
    if (x + 1 <= MAX_LEN && !ch[x + 1]) {
      road[x + 1] = x;
      ch[x + 1] = 1;
      queue.push([x + 1, cnt + 1]);
    }
    if (x - 1 >= 0 && !ch[x - 1]) {
      road[x - 1] = x;
      ch[x - 1] = 1;
      queue.push([x - 1, cnt + 1]);
    }
  }
}

console.log([answer[0], answer[1].join(' ')].join('\n'));
