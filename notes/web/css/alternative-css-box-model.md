# 대체 CSS 박스 모델 (Alternative CSS Box Model)

표준 CSS 박스모델에서 요소의 전체적인 크기는 컨텐츠 박스 + 보더 박스 + 패딩 박스의 너비와 높이 값을 모두 더해 정해진다. 하지만 박스의 실제 크기를 얻기 위해 테두리와 패딩을 추가하는 것이 불편하고 귀찮게 느껴질 수 있다. 이러한 이유로 대체 박스 모델이 도입되었다. 이 모델을 사용한다면 width는 페이지에서 차지하는 박스 너비가 되고 height는 박스의 높이가 됩니다. caniuse에서 box-sizing을 검색해보면 IE도 지원되는것을 확인할 수 있다.

```html
<!-- 대체 박스 모델의 콘텐츠 영역 크기는 width와 height에서 패딩 및 테두리 너비를 뺀 값이 된다.  -->

<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Static Template</title>

    <style>
      * {
        margin: 0;
      }
      h1 {
        width: 100px;
        height: 30px;
        border: 3px solid #228b22;
        padding: 10px;
        box-sizing: border-box;
      }
    </style>
  </head>
  <body>
    <h1></h1>
  </body>
</html>
```

위의 코드에서도 알 수 있듯, box-sizing 속성을 통해 표준 박스 모델을 대체 박스 모델로 변경할 수 있다.

```CSS
h1 {
	box-sizing: border-box;
  /* box-sizing: content-box; --> box-sizing의 기본 값이다. 표준 박스 모델에서 사용된다. */
}
```

이렇게 설정하면 박스 모델 중에 보더 박스의 영역까지 내가 설정한 width, height 값으로 적용된다.

이렇게 되면 매우 직관적으로 요소의 크기를 설정하는 것이 가능하기 때문에 널리 사용되는 방법이기도하다.

```CSS
html {
  box-sizing: border-box;
}
*, *::before, *::after {
  box-sizing: inherit;
}
```

위의 코드를 사용하면 매우 손쉽게 모든 요소에 대체 박스 모델을 적용할 수 있다.
