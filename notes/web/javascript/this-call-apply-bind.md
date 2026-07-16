# this, call, apply, bind

자바스크립트의 this는 호출할 때 결정이 됩니다. 호출하는 객체 또는 호출하는 방법에 따라 this에 값이 달라질 수 있습니당

콘솔에 this를 찍는 함수를 만들어놓고, 객체안에 방금 만든 함수를 넣어놓고 객체에 접근해서 함수를 호출해본다면 그 this는 객체가 될 것 입니다.

```jsx
const 배기훈정보 = {
  이름: "배기훈",
  info: function () {
    console.log(this);
  },
};

배기훈정보.info(); // {이름: '배기훈', info: ƒ}
```

조금 다르게 객체에 함수를 담은 변수를 만들고 그 변수를 호출한다면 그 this는 window가 될것입니다.

```jsx
const test = 배기훈정보.info;
test(); // Window {0: Window, 1: Window, window: Window, self: Window, document: document, name: '', location: Location, …}
```

하나의 버튼을 만들고, 그 버튼에 클릭이벤트를 넣고, this를 콘솔에 찍는 함수를 넣는다면 this는 버튼이 this가 될 것입니다. 이와같이 this는 호출할 때 결정이 됩니다.

```jsx
const btn = document.createElement("button");
btn.innerHTML = "배기훈버튼";
btn.addEventListener("click", test);
btn.click(); // <button></button>
```

이렇게 보이는것처럼 this는 호출하는 방법 또는 호출하는 객체에 따라 다르게 동작합니다. 이럴때 this를 고정시켜놓는 함수가 bind함수입니다. bind 함수를 이용하면 어디서 호출을 하더라도 bind해놓은 객체가 this가 됩니다.

```jsx
const 고정 = {
  name: "배기훈",
};

const 고정된테스트 = test.bind(고정);
고정된테스트();
```

call과 apply는 this를 지정해줌과 동시에 인자값을 넣어줄 수 있습니다.

apply는 배열형태로 두번째 인자에 넣어주면되고, call은 배열을 풀어서 넣어주어야합니다.

```jsx
const 배기훈정보 = {
  이름: "배기훈",
  info: function (인수1, 인수2) {
    console.log(인수1, ",", 인수2, ",", this);
  },
};

const test = 배기훈정보.info;
test(); // undefined ',' undefined ',' Window {0: Window, 1: Window, window: Window, self: Window, document: document, name: '', location: Location, …}

test.apply(고정, ["인수인수", "인수인수인수"]);
// 인수인수 , 인수인수인수 , {name: '배기훈'}

test.call(고정, "인수인수", "인수인수인수");
// 인수인수 , 인수인수인수 , {name: '배기훈'}
```
