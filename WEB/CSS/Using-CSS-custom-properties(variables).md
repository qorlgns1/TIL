# CSS 변수 사용하기

CSS 에서 변수를 사용하여 색상이나 폰트사이즈에 대한 룰을 만들어 사용할 수 있는것을 보았다. 그래서 그 방법을 정리해놓으려한다.  
변수는 CSS 상단에서 다음과 같이 만들고 사용할 수 있다.

```CSS

:root {
  --main-color: #6327FE;
  --txt-color: #333333;
  --border-color: #C4C4C4;
  --sub-border-color: #E0E0E0;
  --bg-color: #F2F2F2;
  --emphasis-txt-color: #EB5757;
  --sub-txt-color: #828282;
  --button-border: #BDBDBD;
}

.box {
  background-color: var(--bg-color);
  border: 1px solid var(--border-color);
}

```

이렇게 CSS 변수를 사용하면 반복되는 어떠한 것을 변경할 때 유용하게 사용할 수 있다.

### 참고하기

[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
