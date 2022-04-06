# flex 넌 너무 어려워

## flex 사용하기

바로 코드를 보며 알아보자.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>CSS Flex</title>
    <link rel="stylesheet" href="default.css" />
    <style>
      /* 플랙스  */
      .flex-container {
        padding: 10px;
        background: lightgray;
      }

      .flex-item {
        padding: 10px;
        border: 3px solid rgb(50, 50, 40);
        color: white;
        background: mediumseagreen;
      }

      .flex-container {
        display: flex; /* inline-flex */
      }
    </style>
  </head>

  <body>
    <div class="flex-container">
      <div class="flex-item">배기훈배기훈배기훈배기훈배기훈배기훈</div>
      <div class="flex-item">qorlgnsqorlgnsqorlgnsqorlgns</div>
      <div class="flex-item">배기훈qorlgns배기훈qorlgns</div>
    </div>
  </body>
</html>
```

> div요소는 block 요소라 한줄씩 배치되지만 flex 속성을 주면 인라인요소처럼 붙어서 한줄에 나오게 된다.  
> flex: block 요소지만 .flex-item들이 한줄에 배치된다.  
> inline-flex: inline-block 요소처럼 동작하며, .flex-item들이 한줄에 배치된다.

## main axis 메인축, cross axis 교차축

flex-item이 배치된 방향이 메인축이다라고 생각하면된다.
그림을 기억하자..!

![메인축_교차축](https://studiomeal.com/wp-content/uploads/2020/01/04-1.jpg)

## flex-direction

아이템들이 배치되는 축의 방향을 결정하는 속성이다. 즉 "메인축"(오뎅꼬치)의 방향을 가로로 할꺼냐 세로로 할거냐"를 정해주는 것이다.

```css
.flex-container {
  display: flex;
  flex-direction: row;
  /* flex-direction: row-reverse; */
  /* flex-direction: column; */
  /* flex-direction: column-reverse; */
}
```

## flex-wrap

컨테이너가 더 이상 아이템들을 한 줄에 담을 여유 공간이 없을 때 아이템 줄바꿈을 어떻게 할지 결정하는 속성이다.

```css
.flex-container {
  display: flex;
  flex-wrap: nowrap; /* 기본속성 */
  /* flex-wrap: wrap; */ /* 줄바꿈 처리 */
  /* flex-wrap: wrap-reverse; */ /* 줄바꿈 처리를 하고 뒤집는다. */
}
```

## flex-flow

flex-direction과 flex-wrap을 한꺼번에 지정할 수 있는 속성이다.  
flex-direction flex-wrap의 순서로 한칸 떼고 작성하면 된다.

```css
.flex-container {
  display: flex;
  flex-flow: row wrap;
  /* 아래 두 줄을 줄여 쓴 것이다. */
  /* flex-direction: row */
  /* flex-wrap: wrap */
}
```

### 간단한 실습 예제

모바일에서는 flex-direction: column으로 만들고, 화면이 일정 이상되면 flex-direction: row로 만들기

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CSS Flex</title>

    <style>
      .flex-container {
        display: flex;
        flex-direction: column;
        padding: 10px;
        background: lightgray;
      }
      .flex-item {
        padding: 10px;
        border: 3px solid rgb(50, 50, 40);
        color: white;
        background: mediumseagreen;
      }

      @media (min-width: 600px) {
        .flex-container {
          flex-direction: row;
        }

        .flex-item {
          flex: 1;
        }
      }
    </style>
  </head>

  <body>
    <div class="flex-container">
      <div class="flex-item">AAAAAAAAAAAA</div>
      <div class="flex-item">BBB</div>
      <div class="flex-item">CCCCCCC</div>
    </div>
  </body>
</html>
```

> justify, align  
> (꼭 머리에 넣어둬야해!!)  
> 앞으로 justify가 나오면 메인축(오뎅꼬치 방향)으로 (좌우) 정렬  
> align은 수직축(오뎅을 뜯어내는)방향 (상하)으로 정렬이라고 생각하면 된다.
>
> ![justify, align](https://studiomeal.com/wp-content/uploads/2020/01/09-1.jpg)

## justify-content

```css
.container {
  /* 아이템들을 시작점으로 정렬
    flex-direction이 row(가로 배치)일 때는 왼쪽, column(세로 배치)일 때는 위예요. */
  justify-content: flex-start;

  /* 아이템들을 끝점으로 정렬합니다.
    flex-direction이 row(가로 배치)일 때는 오른쪽, column(세로 배치)일 때는 아래예요. */
  /* justify-content: flex-end; */

  /* 아이템들을 가운데로 정렬 */
  /* justify-content: center; */

  /* 아이템들의 “사이(between)”에 균일한 간격을 만들어 준다. */
  /* justify-content: space-between; */

  /* 아이템들의 “둘레(around)”에 균일한 간격을 만들어 준다. */
  /* 마진을 주는거와 비슷한데 마진겹침현상없이 마진을 준다고 생각하면 된다. */
  /* justify-content: space-around; */

  /* 아이템들의 사이와 양 끝에 균일한 간격을 만들어 준다. */
  /* 주의! IE와 엣지(Edge)에서는 지원안됌 */
  /* 이 웹사이트의 메뉴 부분은 브라우저 폭이 1024px 이상일 때 space-evenly가 적용되도록 했는데요, IE와 엣지에서만 space-around로 적용이 되도록 처리해 두었어요. */
  /* justify-content: space-evenly; */
}
```

![space-between ~ space-evenly](https://studiomeal.com/wp-content/uploads/2020/01/10-1.jpg)

## align-items

바로 코드를 보자! [1분코딩](https://studiomeal.com/archives/197) 에 들어가서 실습할 수 있다.!

```css
.container {
  align-items: stretch;
  /* align-items: flex-start; */
  /* align-items: flex-end; */
  /* align-items: center; */
  /* align-items: baseline; */
}
```

stretch (기본값)
아이템들이 수직축 방향으로 끝까지 늘어난다.

flex-start
아이템들을 시작점으로 정렬
flex-direction이 row(가로 배치)일 때는 위, column(세로 배치)일 때는 왼쪽이다.

flex-end
아이템들을 끝으로 정렬합니다.
flex-direction이 row(가로 배치)일 때는 아래, column(세로 배치)일 때는 오른쪽이다.

center
아이템들을 가운데로 정렬!

baseline
아이템들을 텍스트 베이스라인 기준으로 정렬!

![베이스라인 이미지](https://studiomeal.com/wp-content/uploads/2020/01/11.jpg)
