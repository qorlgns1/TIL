# Grouping Content

HTML Living Standard에서 Grouping Content의 종류는 p, hr, pre, blockquote, ol, ul, menu, li, dl, dt, dd, figure, figcaption, main, div태그가 존재한다. 각각의 태그의 사용법에 대해 알아보자!

## p태그

태그는 단락을 표시하는 태그입니다. 하나의 완결된 문단을 의미하기 때문에 `<p>` 태그 안에 자식으로 `<p>`를 또 사용하지 않으며, 줄바꿈의 용도로 사용해서도 안됩니다.

## hr태그

`<hr>` 태그는 원래는 가로줄을 표현하기 위해 사용했으나 HTML5에 오면서 의미가 생긴 요소입니다. 이야기에서의 장면 전환 혹은 문단 안에서 주제가 변경되었을 때 그 구별을 위해 사용합니다. 단락을 구분할 때 사용하므로 `<p>`태그 내 사용은 웹 표준에 어긋납니다.

## pre태그

HTML에 작성한 내용 그대로 화면에 표현합니다. 주로 컴퓨터 코드를 표현할 때 사용합니다.

```HTML
<pre>
  const test = () => {
    return true;
  }

  test();
</pre>
```

## lockquote태그

```HTML
<blockquote>
<p>배기훈 <q>짱짱</q></p>
<cite>짱짱기훈짱</cite>
</blockquote>

<p><q>배기훈</q>짱짱</p>
```

## ol태그, ul태그, li태그, menu태그

`<ol>`은 ordered list의 약자로 순서가 있는 목록을 뜻하며 `<ul>`이란 unordered list의 약자로 순서가 없는 목록을 뜻합니다. `<li>`는 각 항목들을 나열하는 태그로 list item을 뜻합니다.
주의할 점은 `<li>` 요소는 `<ol>` 혹은 `<ul>` 요소 안에서만 사용되어야 하며, `<ol>`, `<ul>` 의 직계 자식 요소로는 `<li>` 요소만 사용되어야 합니다.

```html
<h1>분야별 공부 분야 추천</h1>
<h2>Front-End</h2>
<ol type="A">
  <li>HTML</li>
  <li>CSS</li>
  <li>Javacript</li>
  <li>Jquery</li>
  <li>Bootsrap</li>
</ol>
<h2>Back-End</h2>
<ul>
  <li>Python</li>
  <li>Django</li>
</ul>
```

`<menu>` 태그도 웹 표준에 들어가서 [caniuse 홈페이지에 검색](https://caniuse.com/?search=menu)해보니 지원되는 것을 확인했다.
기존에 ul태그와 ol태그, li태그는 익숙했는데 menu태그는 왜 익숙하지 않았는지 의문이다..

```html
<menu>
  <li>
    <button onclick="copy()"><img src="copy.svg" alt="Copy" /></button>
  </li>
  <li>
    <button onclick="cut()"><img src="cut.svg" alt="Cut" /></button>
  </li>
  <li>
    <button onclick="paste()"><img src="paste.svg" alt="Paste" /></button>
  </li>
</menu>
```

## dl태그, dt태그, dd태그

`<ol>`, `<ul>`, `<li>`가 목록을 정의할 때 쓰였듯이 `<dl>`, `<dt>`, `<dd>` 도 목록을 정의할 때 쓰입니다.

차이점이 있다면 `<dl>, <dt>, <dd>`는 사전처럼 어떠한 것을 정의할 때 쓰이는 목록입니다.
`<dl>`은 정의 목록(definition list)이며 `<dt>`는 정의할 용어(definition term)을 뜻합니다. `<dd>`는 용
어를 설명(definition description)할 때 쓰입니다.

```html
<dl>
  <dt>우리집</dt>
  <dd>서울시 마포구 아현동</dd>
</dl>
```

<dl>
    <dt>우리집</dt>
    <dd>서울시 마포구 아현동</dd>
</dl>

## figure태그, figcaption태그

웹페이지를 탐색하다보면 가끔 캡션(자막, 설명)이 있는 이미지를 접할 때가 있습니다.

```html
<figure>
  <img src="images/baby.jpg" alt="엄마 코끼리와 아기 코끼리" />
  <figcaption>관심 받고싶어하는 아기</figcaption>
</figure>
```

`<figcaption>` 요소는 이미지에 캡션을 추가하기 위해 도입되었으며 `<figure>, <figcaption>`요소가 나오기 이전에는 `<img>` 요소와 해당하는 캡션을 연결할 방법이 없었습니다.

## main태그

HTML `<main>` 요소는 문서의 주요 콘텐츠를 나타냅니다.
주요 콘텐츠 영역이란 문서의 핵심 주제나 웹어플리케이션의 핵심 기능에 직접적으로 연결되어 있는 부분을 뜻합니다. 메인 요소안에 들어가는 내용은 문서의 유일한 내용이어야 합니다.
다른 페이지나 섹션에서 반복적으로 표시 될수 있는 정보, 예를 들어 사이트 로고, 검색 폼, 저작권 정보 등은 들어가지 않습니다.
IE 에서는 지원하지 않는 비교적 최근에 등장한 요소임으로 사용에 주의가 필요합니다.

### Reference

[HTML Living Standard](https://html.spec.whatwg.org/multipage/grouping-content.html)
