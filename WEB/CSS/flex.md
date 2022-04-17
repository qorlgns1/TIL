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
        display: flex; /* inline-flex */
      }

      .flex-item {
        padding: 10px;
        border: 3px solid rgb(50, 50, 40);
        color: white;
        background: mediumseagreen;
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
> 물론 오뎅꼬치의 방향이 바뀌면 justify와 align의 방향도 달라진다!
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

아래 코드를 참고! 그리고 [1분코딩](https://studiomeal.com/archives/197) 에 들어가서 실습할 수 있다.!

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

다음과 같은 레이아웃을 만들려면??

![이미지](https://studiomeal.com/wp-content/uploads/2020/01/12.jpg)

```css
/* 좌측 css */
display: flex;
justify-content: center;
align-item: center;
```

```css
/* 우측 css */
display: inline-flex;
justify-content: center;
align-item: center;
width: 30px;
height: 30px;
```

## flex-basis

- flex-basis는 Flex 아이템의 기본 크기를 설정한다.
  - flex-direction이 row일 때는 너비, column일 때는 높이.
- 기본값 auto는 해당 아이템의 width값을 사용한다.
- width를 주지 않고 flex-basis를 10px 이렇게 주면 box의 width는 10px이 된다. 하지만 width를 이용하는 것을 권장한다.
- flex-basis: 100px을 주면 원래 100px이 넘는 박스는 그 상태를 유지하지만 원래 100px이 안되는 박스들은 100px로 늘어나게 된다. 반면에 width를 설정하면, 원래 100px을 넘는 박스들도 100px로 맞춰진다. 이때 안에 content가 다음줄로 넘어가게 하려면 word-wrap: break-word;를 적용해야한다. 안그러면 영역만 100px로 줄어들고 안에 컨텐츠가 넘칠 경우 옆으로 삐져나가버린다.

```css
.item {
  flex-basis: auto; /* 기본값 */
  /* flex-basis: 0; */
  /* flex-basis: 50%; */
  /* flex-basis: 300px; */
  /* flex-basis: 10rem; */
  /* flex-basis: content; */
}
```

## flex-grow

- flex-grow는 아이템이 flex-basis의 값보다 커질 수 있는지를 결정하는 속성이다.
- 늘어나는 속성을 가지고 있다. 기본값은 0으로 늘어나지 않게 기본값이 셋팅되어있고 늘어나고 싶다면 1을 준다.  
  각 박스들의 **남은 여백**을 나눠가지게 된다.
- flex-grow에 들어가는 숫자의 의미는, 아이템들의 flex-basis를 제외한 여백 부분을 flex-grow에 지정된 숫자의 비율로 나누어 가진다고 생각해야 한다.

![flex-grow](https://studiomeal.com/wp-content/uploads/2020/01/13-1.jpg)

## flex-shrink

- flex-shrink는 flex-grow와 쌍을 이루는 속성으로, 아이템이 flex-basis의 값보다 작아질 수 있는지를 결정한다.
- 줄어주는 속성을 가지고 있다. 기본값은 1로 줄어들게끔 기본값이 셋팅되어있고, 줄어들지 않으려면 0을 주면된다.(flex-grow와 기본값이 반대이다.)
- flex-shrink를 0으로 세팅하면 아이템의 크기가 flex-basis보다 작아지지 않기 때문에 고정폭의 컬럼을 쉽게 만들 수 있다. 고정 크기는 width로 설정합니다.

```css
.container {
  display: flex;
}
.item:nth-child(1) {
  flex-shrink: 0;
  width: 100px;
}
.item:nth-child(2) {
  flex-grow: 1;
}
```

## flex

flex는 flex-basis, flex-grow, flex-shrink 를 줄여서 한번에 사용할 수 있는 축약속성이다.

```css
/* flex-grow: 1; flex-shrink: 1; flex-basis: 0%;
주의사항: 이런 식으로 flex-basis를 생략해서 쓰면 flex-basis의 값은 0이 된다. */
flex: 1;

/* flex-grow: 1; flex-shrink: 1; flex-basis: auto; */
flex: 1 1 auto;

/* flex-grow: 1; flex-shrink: 1; flex-basis: 500px; */
flex: 1 500px;
```

```css
/* flex 축약속성 예시 추가 */
.item {
  flex: 1 1 0;
}
.item:nth-child(2) {
  flex: 2 1 0;
}

/* 위와 같이 flex-basis:0; 으로 주면 기본 점유 크기를 0으로 만들어서 결국 전체크기를 1:2:1 이런식으로 설정되게 된다.  
여백의 비가 아닌, 영역 자체를 원하는 비율로 분할하기를 원한다면 이렇게 flex-basis을 0으로 하면 손쉽게 처리할 수 있어요. */
```

## order

각 아이템들의 시각적 나열 순서를 결정하는 속성이에요.
숫자값이 들어가며, 작은 숫자일 수록 먼저 배치됩니다. “시각적” 순서일 뿐, HTML 자체의 구조를 바꾸는 것은 아니므로 접근성 측면에서 사용에 주의하셔야 한다. 시각 장애인분들이 사용하는 스크린 리더로 화면을 읽을 때, order를 이용해 순서를 바꾼 것은 의미가 없다는 것을 기억해야 한다.
