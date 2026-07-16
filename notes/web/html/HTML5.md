# HTML5

HTML5는 HTML의 완전한 5번째 버전으로 월드 와이드 웹 (World Wide Web)의 핵심 마크업 언어이다.  
비디오, 오디오 등 다양한 부가기능과 최신 멀티미디어 콘텐츠를 액티브X 없이 브라우저에서 쉽게 볼 수 있게 하는 것을 목적으로 한다.

## HTML4와의 차이점

---

HTML4는 ?  
HTML : 특정 태그 `<div>`를 사용하여 영역을 구분한다.  
CSS : HTML의 태그를 꾸며준다.  
JavaScript : 데이터를 처리하거나 서버에 요청하는 일을 한다.

HTML5는 ?  
HTML : `<section>`을 사용하여 영역을 구분한다.  
CSS : 자바스크립트가 담당하던 처리의 일부를 HTML 태그 속성에서 처리한다.  
JavaScript : HTML5, CSS에서 처리할 수 없는 기능들을 담당하며, 캔버스(Canvas)에서 사용하면 게임 작성도 가능하다.

> <b>HTML5에서 변경된 태그</b>  
> a : href 속성 없이 사용 시 null 링크로 사용  
> address : 실제의 주소 표시  
> b : 중요하지 않지만 진하게 표시  
> hr : 단락 주제 변경 시  
> l : 중요한 정보 기울임꼴로 표시  
> menu : 실제 문서 메뉴 정보를 제공하는데 사용  
> small : 세부 주석이나 법적 인쇄 문서에서 작은 글자 정보 표시  
> strong : 중요한 정보를 진하게 표시

> <b>HTML5에서 제거 된 태그</b>  
> CSS에서 대체 할 수 있기 때문에 더이상 사용되지 않는다.  
> basefont, big, center, font, frame, frameset, nofreames, s, strike, tt, u

> <b>다른 태그들과 사용법에서 혼란을 주어 더이상 사용되지 않는다.</b>  
> acronym, applet, isindex, dir, noscript

- 요소 추가
  - 구조적인 요소 - 구역을 나누는 블록 요소인 div 요소를 대신한다.
    - header: 사이트의 소개나 네비게이션 등을 표시
    - nav: 사이트의 내비게이션 항목을 표시
    - section: 일반적인 문서나 애플리케이션 영역을 표시, 섹션의 제목을 나타내는 `<h1>~<h6>`도 함께 사용
    - aside: 본문의 내용과는 독립적인 사이드바의 콘텐츠 표시
    - footer: 사이트의 제작자나 저작권 정보 등을 주로 표시
  - 멀티미디어 요소 - 플러그인 없이 멀티미디어를 재생할 수 있게 한다.
    - audio - 오디오를 재생한다.
    ```html
    <audio controls>
      <source src="파일.mp3" type="audio/mpeg" />
    </audio>
    ```
    - video - 비디오를 재생한다.
    ```html
    <video width="가로" height="세로" controls>
      <source src="파일.mp3" type="video/mp4" />
    </video>
    ```
    - canvas: 웹 상에서 그래픽 표시, 자바스크립트 및 API와 같이 사용해서 다양한 애플리케이션을 만들 수 있다.
    - 그 외 태그들
      - datalist : 사용자가 텍스트 필드에 입력 시 선택 할 수 있는 값의 목록 표시
      - details : 추가적인 정보나 사용자가 요청하는 정보를 표시
      - embed : 플러그인 콘텐츠 표시
      - figure : 설명글을 붙일 대상 정의
      - figcaption : <figure>로 정의한 대상에 설명글을 붙임
      - mark : 텍스트에 형광펜을 칠한 것과 같은 강조 효과
      - meter : 측정 값 표시
      - output : 수학적 계산의 결과 값을 표시
      - progress : 시간이 걸리는 작업을 막대로 표시
      - time : 날짜나 시간 표시

## Reference

---

1. [위키 HTML5](https://ko.wikipedia.org/wiki/HTML5)
2. [HTML4 HTML5와의 다른 점과 변경된 태그](https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=smilennv&logNo=220848542505)
