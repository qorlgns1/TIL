# Promise

내가 이해한 프로미스에 대한 설명 기록

## Promise.resolve 가 사용가능한 이유?

이게 사용 가능한 이유는 Promise라는 객체 안에 정적 메서드가 존재하기 때문이다.

```
class A {
  constructor() {

  }

  static m() {
    ...
  }
}
```

예를 들어 우리가 여기서 m이라는 메서드를 사용하려면
const test = new A();  
test.m() 이렇게 사용하는것이 아니라 A.m() 이렇게 사용하는것처럼
Promise도 정적메서드를 가지고있어서 Promise.resolve를 사용할 수 있었던 것이라고 생각하면 될듯.

## Promise 작동 순서

```js
const snack = () => Promise.resolve("와, 맛있겠다!"); // 4번

async function mySnack() {
  console.log("치즈 케이크 주세요!"); // 3번
  const res = await snack(); // 4번
  console.log(res); // 6번

  // snack().then((res) => {
  //      console.log(res); // 6번
  // });
  // console.log("몇번?")
}

console.log("주문하시겠어요?"); // 1번
mySnack(); // 2번
console.log("주문하신 케이크 나왔습니다!"); // 5번
```

비동기가 처리되고 저장되는 테스크큐는 2개가 있다. 매크로 테스크 큐, 마이크로 테스크 큐

settimeout은 매크로 테스크큐에 저장되고 promise는 마이크로 테스크 큐에 저장된다.

위의 예제에서 작동순서는 다음과 같다

- console.log('주문하시겠어요?')
- console.log('치즈 케이크 주세요!')
- const res = await snack()
  - 여기서 스택에 올라가지만 백그라운드를 거쳐 마이크로 테스크큐로 넘어간다.
- console.log('주문하신 케이크 나왔습니다!')
- 스택에 더이상 올라올게 없으니 이벤트루프는 마이크로 테스크큐를 뒤져서 존재하면 스택으로 가져온다.
- const res = await snack()
- console.log(res)

여기서 하나 알아야할것이 아래코드는 다음과 같이 변경이 가능하다.

```js
const res = await snack();
console.log(res);

// 아래처럼 변경 가능

snack().then((res) => {
  console.log(res);
});
```

그래서 await가 실행되고 그 다음 콘솔이 실행되는 것이였다.

그리고 아래의 예제를 살펴보자.

```js
setTimeout(() => {
  console.log("settimeout");
}, 0);

new Promise((resolve, reject) => {
  resolve("Success!");
  reject("ggg");
})
  .then((value) => {
    console.log(value);
    throw Error();
  })
  .catch((e) => {
    console.log("e", e);
  })
  .finally(() => {
    console.log("finally");
  });

console.log(1);

let i = 0;
while (i < 1000) {
  i++;
  console.log("while");
}
```

그럼 아래의 예제를 살펴보자.
settimeout의 시간을 0초 또는 1초로 변경해서 테스트해봅시다.  
그리고 순서를 살펴봅니다.

```html
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>위니브 스토어</title>
    <script src="https://code.jquery.com/jquery-3.5.0.js"></script>
  </head>

  <body>
    <div id="root"></div>
    <script>
      $root = $("#root");
      $root.append(`<main class='product'></main>`);
      $main = $("main");
      $main.append(`
            <h1 class="ir">상품목록 페이지</h1>
            <ul class="product-list"></ul>
        `);
      $product_list = $(".product-list");

      let product;
      $.ajax({
        url: "http://test.api.weniv.co.kr/mall",
        async: true,
        dataType: "JSON",
        success: function (result) {
          // $("#data").text(result);
          product = result;
          console.log("1", product);
          product.forEach((data) => {});
        },
      });

      setTimeout(() => {
        console.log(1234);
      }, 1000);

      console.log("2", product);
    </script>
  </body>
</html>
```
