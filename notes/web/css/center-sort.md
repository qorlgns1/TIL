# 가운데 정렬하기

다음과 같은 코드를 이용해 가운데 정렬하는 방법을 정리해보려한다.

```html
<!DOCYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>텍스트 정렬</title>
    <style>
      .text_center {
        text-align: center;
      }
      .text_left {
        text-align: left;
      }
      .text_right {
        text-align: right;
      }
      .one {
        transform: translateX(50%);
      }
    </style>
  </head>
  <body>
    <div class="text_center">
      <p>hello</p>
    </div>
    <div class="text_center">
      <img
        width="100px"
        src="https://www.tvn-2.com/nacionales/Imagen-ilustrativa-gato-medio-bosque_18585331.jpg"
        alt=""
      />
    </div>
    <div class="text_left">hello <span>왼쪽 정렬</span></div>
    <div class="text_right">hello <span>오른쪽 정렬</span></div>
    <div class="text_center">
      <span>가운데 정렬</span>
    </div>
  </body>
</html>
```

## 방법 1 : margin 이용하기

가운데 정렬할 엘리먼트들을 wrapper 클래스로 감싸고 margin: 0 auto 를 주는 방법이다.

```html
<!DOCYPE html>
<html>
  <head>
    <title>텍스트 정렬</title>
    <style>
      .wrapper {
        width: 500px;
        margin: 0 auto;
      }

      .text_center {
        text-align: center;
      }

      .text_left {
        text-align: left;
      }

      .text_right {
        text-align: right;
      }

      .one {
        transform: translateX(50%);
      }
    </style>
  </head>

  <body>
    <div class="wrapper">
      <div class="text_center">
        <p>hello</p>
      </div>
      <div class="text_center">
        <img
          width="100px"
          src="https://www.tvn-2.com/nacionales/Imagen-ilustrativa-gato-medio-bosque_18585331.jpg"
          alt=""
        />
      </div>
      <div class="text_left">hello <span>왼쪽 정렬</span></div>
      <div class="text_right">hello <span>오른쪽 정렬</span></div>
      <div class="text_center">
        <span>가운데 정렬</span>
      </div>
    </div>
  </body>
</html>
```

## 방법 2 : flex이용하기

```
<!DOCYPE html>
  <html>

  <head>
    <title>텍스트 정렬</title>
    <style>
      .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
      }


      .text_center {
        text-align: center;
      }

      .text_left {
        text-align: left;
      }

      .text_right {
        text-align: right;
      }

      .one {
        transform: translateX(50%);
      }
    </style>
  </head>

  <body>
    <div class="wrapper">
      <div class="text_center">
        <p>hello</p>
      </div>
      <div class="text_center">
        <img width="100px" src="https://www.tvn-2.com/nacionales/Imagen-ilustrativa-gato-medio-bosque_18585331.jpg"
          alt="">
      </div>
      <div class="text_left">
        hello <span>왼쪽 정렬</span>
      </div>
      <div class="text_right">
        hello <span>오른쪽 정렬</span>
      </div>
      <div class="text_center">
        <span>가운데 정렬</span>
      </div>
    </div>
  </body>

  </html>
```
