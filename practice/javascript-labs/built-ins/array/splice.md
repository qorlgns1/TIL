# Array​.prototype​.splice()

splice() 메소드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경한다. 이 메소드는 원본 배열 자체를 수정한다.

splice(start[, deleteCount[, item1[, item2[, ...]]]])

<center><img width="500" height="200" src="./image/sliceAndSplice.png" /></center>

- start: 배열의 변경을 시작할 인덱스.

  - 음수를 지정한 경우: 배열의 끝에서부터 요소를 센다.
    배열의 길이보다 큰 수를 지정한 경우: 실제 시작 인덱스는 배열의 길이로 설정
    절대값이 배열의 길이보다 큰 경우: 0으로 세팅

- deleteCount: 배열에서 제거할 요소의 수.

      - 생략 / 값이 array.length - start보다 큰 경우: start부터의 모든 요소를 제거.

  0 이하의 수를 지정: 어떤 요소도 제거되지 않는다.

- item1, item2, ... : 배열에 추가할 요소.

  - 지정하지 않는 경우: splice()는 요소 제거만 수행한다.

반환값: 제거한 요소를 담은 배열.

아무 값도 제거하지 않았으면 빈 배열을 반환한다.

```javascript
const animals = ["lion", "tiger", "elephant", "zebra"];
const deleteElements = animals.splice(1, 2, "ttt");
console.log(animals); // ["lion", "ttt", "zebra"]
console.log(deleteElements); //  ["tiger", "elephant"]

// ------------------------------------------------

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var arr1 = arr.splice(10, 2, "a", "b", "c");
console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "a", "b", "c"]
console.log(arr1); // [11, 12]

// splice() 함수를 사용하면 원본 배열인 arr이 변경된다.
// 10번째 인덱스부터 2개의 요소를 삭제하고 'a', 'b', 'c'를 추가했으므로
// 11과 12가 삭제되고 이 삭제된 요소들의 배열은 arr1 변수에 담긴다.
```

```javascript
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var arr1 = arr.splice(-6, 4);
console.log(arr); // [1, 2, 3, 4, 5, 6, 11, 12]
console.log(arr1); // [7, 8, 9, 10]

// -6을 넣으면 뒤에서부터 6번째인 7부터 시작하여 4개의 요소를 삭제한다.
```

```javascript
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

var arr1 = arr.splice(-13, 1);

console.log(arr); // [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
console.log(arr1); // [1]

// -13의 절대값이 배열의 길이보다 큰 경우에는 0으로 세팅한다.
// 그러므로 0번째 요소부터 1개의 요소를 삭제하므로 숫자 1이 삭제된다.
```

```javascript
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

var arr1 = arr.splice(3);

console.log(arr); // [1, 2, 3]
console.log(arr1); // [4, 5, 6, 7, 8, 9, 10, 11, 12]

var arr2 = arr1.splice(6, 4);

console.log(arr1); // [4, 5, 6, 7, 8, 9]
console.log(arr2); // [10, 11, 12]

// deleteCount가 생략되거나 array.length - start의 값보다 큰 경우
// 지정한 start 인덱스부터 끝까지 모두 제거한다.
```

```javascript
// 배열에 새로운 값을 추가할 때 사용!

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

var arr1 = arr.splice(5, 0, "add");

console.log(arr); // [1, 2, 3, 4, 5, "add", 6, 7, 8, 9, 10, 11, 12]
console.log(arr1); // []

// deleteCount가 0이거나 0보다 작은 수이면 어떤 요소도 삭제되지 않는다.
// 그러므로 arr1은 빈배열을 반환한다.
```

### Ref

[splice](https://im-developer.tistory.com/103)
