# overflow에 대하여

부모 태그 div와 자식 태그 img 에서 img에 height만큼 div태그는 높이를 가지게 된다. 하지만 때로는 div태그의 height를 img의 height보다 작게 줄어줘야 하는 상황이 있을 수 있다. 그 때 div의 height가 줄어들면 이미지도 부모 태그 높이만큼 줄어들것 같지만 실제로 그렇지 않다. 이럴때 쓰는 속성이 overflow이다. 가장 많이 사용하는 value는 hidden인데 이 때 결과는 부모태그의 높이만큼만 img 태그의 이미지가 나오게 된다.

## overflow

div태그 안에 어떠한 태그에 float 속성을 주면 div태그에서 공중에 떠있다고 생각한다. 그 증거는 div 태그에 border값을 주면 자식 요소가 포함이 안되어있는 것을 알고있다. 하지만 html 태그는 다르다 html태그에 border값을 주면 float 속성이 있는 태그까지 border 태그로 감싸고 있음을 알 수 있다. 이러한 것을 BFC(Block Fomatting context)라고한다. 만약 div태그에 overflow: hidden을 주게 되면 이 div 태그는 BFC가 된다. 그리고 어떠한 형제태그가 밑에 존재해도 이 div태그를 침범하지 않게된다. 나는 [유튜브강의](<(https://www.youtube.com/watch?v=O-n1EjDEuIc&ab_channel=%EB%B9%94%EC%BA%A0%ED%94%84CSS)>)를 통해서 이것을 공부해보았다. 그런데 유튜브에서 설명하는것과 조금 다른것을 발견해서 질문을 남겨보았다. 그리고 답변이 왔다.

![유튜브 질문](./images/overflow-study-question.png)

내가 테스트 해본 코드는 다음과 같았다.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Static Template</title>
    <style>
      html {
        border: 1px solid red;
      }

      body {
        /* border: 1px solid red; */
      }

      .box {
        border: 3px solid blue;
      }

      .content {
        border: 1px solid black;
        width: 100px;
        height: 100px;
        float: left;
      }
    </style>
  </head>
  <body>
    <div class="box">
      <div class="content"></div>
    </div>
  </body>
</html>
```

친절히 답변도 해주시고 또 이렇게 알아가는 즐거움을 하나 얻게되었다. 오랫동안 머릿속 기억이 남을것 같다.

### 참고자료

[오버플로우 빔캠프 유튜브 강의](https://www.youtube.com/watch?v=O-n1EjDEuIc&ab_channel=%EB%B9%94%EC%BA%A0%ED%94%84CSS)  
[MDN BFC에 대하여](https://developer.mozilla.org/ko/docs/Web/Guide/CSS/Block_formatting_context)
