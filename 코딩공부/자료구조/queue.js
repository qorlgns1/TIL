class Queue {
  constructor() {
    this.storage = {};
    this.front = 0;
    this.rear = 0;
    this.size1 = 0;
  }

  size() {
    if (this.storage[this.rear] === undefined) {
      return 0;
    } else {
      // 데이터가 100만개 정도되면 약간 버벅이고, 1000만개는 렉걸린다.
      return Object.keys(this.storage).length;
    }
  }

  add(value) {
    if (this.size() === 0) {
      this.storage['0'] = value;
    } else {
      this.rear += 1;
      this.storage[this.rear] = value;
    }

    this.size1++;
  }

  popleft() {
    let temp;
    if (this.front === this.rear) {
      temp = this.storage[this.front];
      delete this.storage[this.front];
      this.front = 0;
      this.rear = 0;
    } else {
      temp = this.storage[this.front];
      delete this.storage[this.front];
      this.front += 1;
    }

    this.size1--;
    return temp;
  }
}

const q = new Queue();
q.add(23);
q.add(54);
q.add(26);

// for (let i = 0; i < 10000000; i++) {
//   q.add(i);
// }
