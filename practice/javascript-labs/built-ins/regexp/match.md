# String.prototype.match()

match 함수를 사용했을 때 정규식과 매치되는 부분을 검색한다.

## match를 사용할 때 기억하기

1. 매치되는 부분이 없으면 null을 리턴한다.
2. 인자로 정규식 또는 문자열을 넣을 수 있다.
3. 가장 처음에 매칭되는 index를 얻을 수 있다.

- 대소문자와 구분없이 매칭되는것을 조회할 때는 indexOf말고 match를 이용해보자.

4. g(글로벌)을 사용한 정규식을 match의 인자로 넣을 경우에 배열을 리턴한다.
5. 글로벌을 사용한 정규식말고는 가장 첫번째 조회된 것을 리턴한다.

```js
var str = 'For more information, see Chapter 3.4.5.1';
var re = /see (chapter \d+(\.\d)*)/i;
var found = str.match(re);

console.log(found);

//  (3) ['see Chapter 3.4.5.1', 'Chapter 3.4.5.1', '.1', index: 22, input: 'For more information, see Chapter 3.4.5.1', groups: undefined]

// 참고링크: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/match
```

```js
const str = 'For more information, see Chapter 3.4.5.1';

console.log(str.match('z'));
// null

console.log(str.match('1'));
// ['1', index: 40, input: 'For more information, see Chapter 3.4.5.1', groups: undefined]

console.log(str.match('f'));
// ['f', index: 11, input: 'For more information, see Chapter 3.4.5.1', groups: undefined]

console.log(str.match('F').index);
// 0

console.log(str.match('o').index);
// 1

console.log(str.match(/o/));
// ['o', index: 1, input: 'For more information, see Chapter 3.4.5.1', groups: undefined]

// g를 사용하는건 전체에서 찾는거기 떄문에 배열을 리턴한다.
console.log(str.match(/o/g));
// (4) ['o', 'o', 'o', 'o']

// i는 대소문자 구분없이 조회를 한다.
console.log(str.match(/o/gi));
// (4) ['o', 'o', 'o', 'o']

console.log(str.match(/o/gi));
// (4) ['o', 'o', 'o', 'o']

console.log(str.match(/f/i));
// ['F', index: 2, input: 'OOFor more information, see Chapter 3.4.5.1', groups: undefined]
```
