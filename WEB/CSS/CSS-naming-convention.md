# CSS naming convention

어느날 문득 생각이 들었다. CSS 클래스 이름을 지을 때 어떻게 짓는것이 효율적일지.. 항상 변수 이름 짓는것과 CSS 이름짓는 것이 너무 어려웠다. 그래서 CSS naming convention을 공부해보기로 했다.

## BEM

BEM이란? CSS 제작 방법론으로, 일종의 네이밍 컨벤션이라고 볼 수 있다. 개발, 디버깅, 유지보수를 위해 가능한 명확하게 네이밍하는 것이 그들의 목표이다.

### BEM Naming Rules

- 소문자, 숫자 만을 조합
- 조합은 -(하이픈)으로 연결하여 작명

```CSS
/* 잘못된 예 */
.redBox{
  color: red;
}

/* 올바른 예 */
.red-box{
  color: red;
}
```

- Naming의 조합은 형태>의미>순서\_상태를 기본순서로 사용

```CSS
/* Naming 조합 잘못된 예 */
cancle_btn_off_01.gif
.msgbox-off-toggle


/* Naming 조합 올바른 예 */
btn_cancle_01_off.gif
.msgbox-toggle-off
```

- Naming 규칙의 \_(언더바) 조합은 파일, 폴더, 이미지에 사용

```CSS
/* 잘못된 예 */
customerService

/* 올바른 예 */
customer_service
```

### Block Name(BEM중 B에 해당)

```HTML
<div class="menu">...</div>

.menu {
  color: red;
}
```

- Block Name은 해당 Element 및 Modifier에 대한 네임 스페이스를 정의
- 형태(red, big)가 아닌 목적(menu, button)에 맞게 결정해야 함
- 환경에 영향을 받지 않아야 함(여백, 위치 설정 x)
- 태그, id선택자로 사용하면 안됨
- 기본적인 component를 나타냄
- ex) header, menu, search-form ...

### Element Name(BEM중 E에 해당)

동일한 블록의 동일한 요소는 동일한 이름을 갖는다. 예를 들어, 메뉴 블록의 모든 메뉴 항목은 menu\_\_item이라고 한다

```HTML
<div class="menu">
  ...
  <span class="menu__item"></span>
</div>

.menu__item {
  color: red;
}
```

- Element Name은 \_\_(이중 밑줄)로 Block Name과 구분
- 블록 안에서 특정 기능을 담당하는 부분
- block\_\_element 형태로 사용
- 형태(red,big)가 아닌 목적(item, text, title, list)에 맞게 결정해야 함
- 블록에 종속되어 있어 블록의 부분으로만 사용할 수 있고, 다른 요소의 부분으로 사용할 수 없음
- 선택적으로 사용가능해야 함(요소가 없을 수도 있음)

### Element Modifier Name(BEM중 M에 해당)

- ex) menu**item_visible, menu**item_type_radio

```HTML
<div class="menu">
  ...
  <span class="menu__item menu__item_visible menu__item_type_radio"> ... </span>
</div>

.menu__item_visible {
}
.menu__item_type_radio {
}

```

- Modifier Name은 \_(단일 밑줄)로 Block 또는 Element Name과 구분
- Modifier Value는 \_(단일 밑줄)로 Modifier Name과 구분
- 시작 이름은 영문 대문자, 숫자, 특수문자로 시작할 수 없음(파일 및 폴더 제외)
- component가 아니라 요소(element)도 수정할 수 있음
- 블록이나 요소의 모양(color, size), 상태(disabled, checked..)를 정의함

## Ref

[CSS Naming Convention](https://velog.io/@2seunghye/CSS-naming-methodologyBEM)
