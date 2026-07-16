# position

포지션이란 이름처럼 태그들의 위치를 결정하는 CSS입니다.

- static  
  일단 모든 태그들은 처음에 position: static 상태입니다. (기본적으로 static이라 따로 써주지 않아도 됩니다.) 차례대로 왼쪽에서 오른쪽, 위에서 아래로 쌓입니다.
- relative
  여기서 태그의 위치를 살짝 변경하고 싶을 때 position: relative를 사용합니다. 이제 top(위), right(오른쪽), bottom(아래), left(왼쪽) 속성을 사용해 위치 조절이 가능합니다.
- absolute  
  relative가 static인 상태를 기준으로 주어진 픽셀만큼 움직였다면, absolute는 position: static 속성을 가지고 있지 않은 조상을 기준으로 움직입니다. 만약 조상 중에 포지션이 relative, absolute, fixed인 태그가 없다면 가장 위의 태그(body)가 기준이 됩니다.
- fixed  
  스크롤을 내려도 그자리에 계속 위치하고 싶을 때 사용하는 것을 fixed로 설정하면 된다.  
  fixed도 absolute처럼 더는 div가 width: 100%가 아니다.

### CSS position 속성

- z-index  
  HTML 요소의 위치를 설정하게 되면 어떤 요소들은 설정된 위치 및 방식에 따라 서로 겹칠 수도 있습니다.  
  z-index 속성은 이렇게 겹쳐지는 요소들이 쌓이는 스택(stack)의 순서를 설정합니다.  
  스택(stack)의 순서는 양수나 음수 모두 설정할 수 있으며, 크기가 클수록 앞쪽에 위치하고 작을수록 뒤쪽에 위치하게 됩니다.
- position  
  HTML 요소의 위치를 결정하는 방식을 설정함.
- top  
  위치가 설정된 조상 요소의 위로부터의 여백을 설정함.
- right  
  위치가 설정된 조상 요소의 오른쪽으로부터의 여백을 설정함.
- bottom  
  위치가 설정된 조상 요소의 아래로부터의 여백을 설정함.
- left  
  위치가 설정된 조상 요소의 왼쪽으로부터의 여백을 설정함.
- clip  
  절대 위치(absolute position) 지정 방식으로 위치한 요소를 자름.
- cursor  
  표시되는 마우스 커서의 모양을 설정함.
- overflow  
  내용(content)의 크기가 해당 요소의 박스(box)를 넘어갈 때 어떻게 처리할지를 설정함.
- overflow-x  
  내용(content)의 크기가 해당 요소의 수평 방향으로 박스(box)를 넘어갈 때 어떻게 처리할지를 설정함.
- overflow-y
  용(content)의 크기가 해당 요소의 수직 방향으로 박스(box)를 넘어갈 때 어떻게 처리할지를 설정함.

## Reference

1. [CSS 포지션(position)](https://www.zerocho.com/category/CSS/post/5864f3b59f1dc000182d3ea1)
2. [포지션](http://www.tcpschool.com/css/css_position_position)
