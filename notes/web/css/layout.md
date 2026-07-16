# 레이아웃 영역 나누기

혼자서 가볍게 레이아웃을 나누는 연습을 해보았다.
엄청 간단하다고 생각했는데 막상 아무것도없어 혼자 하려니 생각처럼 쉽지않았다.  
각각의 div로 나눈 영역에 크롬 개발자도구에서 엘리먼트에 마우스를 올렸을 때 영역이 겹치지 않고 레이아웃을 구성해보고 싶었다.

코드는 아래와 같다.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      body {
        margin: 0;
      }
      .nav {
        height: 50px;
        background-color: beige;
        border: 2px solid black;
      }
      .left-menu {
        float: left;
        min-width: 200px;
        height: 40vw;
        border: 2px solid red;
        background-color: coral;
      }
      .article {
        border: 2px solid blue;
        height: 40vw;
        background-color: cyan;
        overflow: auto;
      }
      .footer {
        float: left;
        width: 100%;
        background-color: darkolivegreen;
        height: 50px;
      }
    </style>
  </head>
  <body>
    <div class="nav">navi</div>

    <div class="left-menu">left-menu</div>
    <div class="article">content</div>
    <div class="footer">footer</div>
  </body>
</html>
```

article 클래스의 영역이 자꾸 left-menu클래스 영역까지 같이 잡히고 있었다. 이부분을 명확히 나누고 싶었고, `overflow: auto` 를 주니 해결이 되었다.

그래서 오늘은 overflow 속성에 대하여 자세히 공부해보려한다.

## overflow

---

overflow CSS 단축 속성은 요소의 콘텐츠가 너무 커서 요소의 블록 서식 맥락에 맞출 수 없을 때의 처리법을 지정합니다. overflow-x (en-US), overflow-y (en-US)의 값을 설정합니다.  
visible(기본값)이 아닌 다른 값으로 overflow 속성을 사용할 경우 새로운 블록 서식 문맥을 생성합니다.  
이는 기술적인 요구사항으로, 만약 스크롤하는 요소와 float이 교차한다면, 각 스크롤 단계마다 내용물을 강제적으로 다시 감싸게 될 것입니다. 이는 결국 스크롤 속도를 느리게 할 것입니다.  
<b>overflow 속성이 효력을 갖기 위해선 반드시 블록 레벨 컨테이너의 높이(height 또는 max-height)를 설정하거나, white-space를 nowrap으로 설정해야 합니다.</b>

## Reference

1. [MDN-overflow](https://developer.mozilla.org/ko/docs/Web/CSS/overflow)
