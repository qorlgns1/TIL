# :first-child, :first-of-type 차이

나는 이용약관동의 페이지를 만들다가 .class:first-child를 사용하면서 아래와 같은 이슈를 접하게 되었다. 크롬에서 inline요소로 style을 주면 작동하는데 css파일에서 !important를 줘도 작동하지 않았다. 이 말은 해당태그를 찾지 못했다는 것이였다.

```
<div class="parent">
  <h1>TITLE</h1>
  <div class="child">Child1</div>
  <div class="child">Child2</div>
  <div class="child">Child3</div>
  <div class="child">Child4</div>
</div>

.parent > .child:first-child {
  color: red;
}
```

위 코드의 결과값이 나는 div.child 태그를 선택할 것이라고 생각했다. 하지만 잘못된 생각이였다. 그래서 first-child 대신 nth-child(1)를 사용해보았다.

```
.parent > .child:nth-child(1) {
  color: red;
}
```

아무일도 일어나지않았다. 그럼 **:last-child**를 사용하면 어떨까?

```
.parent > .child:last-child {
  color: red;
}
```

마지막 요소가 빨갛게 변했다. 그럼 nth-child(2)를 주면 어떨까?

```
.parent > .child:nth-child(2) {
  color: red;
}
```

작동했다. 하지만 뭔가 이상하다. 내 의도와 다르게 동작한다.

결과적으로, first-child 는 원하는 결과가 아니였지만, last-child 은 원하는 결과를 냈다. nth-child(2)는 내 의도와 다르게 동작한다.

## first-child 와 first-of-type 를 차이를 알아보자.

> :first-child => 형제 요소의 그룹 중 첫번째 요소를 나타낸다.  
> => 쉽게 이야기하면 first-child(nth-child())는 자기 자신 기준으로 바라보면 안되고 자신의 부모의 기준에서 바라봐야한다.

> :first-of-type => 형제 요소의 그룹 중 해당 타입의 첫번째 요소를 나타낸다.  
> => first-child(nth-child())와 다르게 부모기준이아니고 type 기준으로 바라봐야한다.

형제 요소란, 태그 or 클래스명 등과 같은 것으로 구분하는 것이 아닌, 단순히 같은 레벨의 요소라고 보면 된다.
아래 코드를 보면 같은 색상을 가지고 있는 요소가 서로 형제라는 것을 의미한다.

```html
<header style="color=red">
  <div style="color=blue">
    <span style="color=green"></span>
    <div style="color=green"><div>
  <div>
  <span style="color=blue"></span>
</header>
<main style="color=red"></main>
```

다시 돌아가서 클래스명이 .child 인 요소의 형제 요소는 `<div class="child">` 요소 4개뿐만 아니라, `<h1>` 요소도 같은 레벨에 있는 형제 요소에 포함된다.  
아무리 클래스명을 child 로 지정했다해도, **first-child 는 형제 요소를 찾는 것**이고, **단순히 부모 요소의 자식 요소들을 찾는다고 보면 이해하기 쉽다.**  
즉, `<div class="parent">` 의 자식 요소들은 `<h1>` 1개, `<div class="child">` 4개로, 총 5개가 된다. `last-*, nth-*` 과 같은 CSS 셀렉터도 같은 맥락으로 이해하면 된다.

주의할 점으로는, `:first-of-type` 은 위처럼(빨간색) `<h1>`, `<div> `중복으로 결과를 낼 수 있다.

```html
<!-- bad : h1과 Child1 이 둘다 빨간색으로 나옴. -->
<div class="parent">
  <h1>TITLE</h1>
  <div class="child">Child1</div>
  <div class="child">Child2</div>
  <div class="child">Child3</div>
  <div class="child">Child4</div>
</div>

<style>
  .parent > :first-of-type {
    color: red;
  }
</style>

<!------------------------------>

<!-- better case -->
<div class="parent">
  <h1>TITLE</h1>
  <div class="child">Child1</div>
  <div class="child">Child2</div>
  <div class="child">Child3</div>
  <div class="child">Child4</div>
</div>

<style>
  /* better case1 */
  .parent > :first-of-type {
    color: red;
  }

  /* better case2 */
  .parent > div:first-of-type {
    color: red;
  }
</style>
```

그렇기에 명확히 셀럭터를 명확히 표현해주면 더더욱 좋을 것이다.

### 참고

[:first-child, :first-of-type 차이](https://mygumi.tistory.com/342)  
[:nth-child가 이상혀요](https://www.youtube.com/watch?v=4p7gPzAtVqc&t=2s&ab_channel=%EB%B9%94%EC%BA%A0%ED%94%84CSS) (이건 나중에 꼭 다시보자...!)
