# Redux 개념 정리

## 액션(action)

상태에 어떠한 변화가 필요하면 액션(action)이란 것이 발생합니다. 이는 하나의 객체로 표현되는데 액션 객체는 다음과 같은 형식으로 이루어져있다.

```javascript
{
  type: "TOGGLE_VALUE";
}
```

액션 객체는 type 필드를 반드시 가지고 있어야 한다. 이 값을 액션의 이름이라고 생각하면 된다. 그리고 그 외의 값들은 나중에 상태 업데이트를 할 때 참고해야 할 값이며, 작성자 마음대로 넣을 수 있다.

```javascript
// 액션 예시
{
  type: 'TOGGLE_VALUE',
  data: {
    id: 1,
    text: '리덕스 배우기'
  }
}

{
  type: 'CHANGE_INPUT',
  text: '안녕하세요'
}
```

### 액션 생성 함수

액션 생성 함수(action creator)는 액션 객체를 만들어 주는 함수이다.

```javascript
function addTodo(data) {
  return {
    type: "ADD_TODO",
    data,
  };
}
```

어떤 변화를 일으켜야 할 때마다 액션 객체를 만들어야 하는데 매번 액션 객체를 직접 작성하기 번거로울 수 있고, 만드는 과정에서 실수로 정보를 놓칠 수도 있다. 이러한 일을 방지하기 위해 이를 함수로 만들어서 관리한다.

## 리듀서(reducer)

리듀서는 변화를 일으키는 함수이다. 액션을 만들어서 발생시키면 리듀서가 현재 상태와 전달받은 액션 객체를 파라미터로 받아온다. 그리고 두 값을 참고하여 새로운 상태를 만들어서 반환해 준다.

```javascript
const initialState = {
  counter: 1,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        counter: state.counter + 1,
      };
    default:
      return state;
  }
}
```

## 스토어(store)

프로젝트에 리덕스를 적용하기 위해 스토어를 만든다. 한 개의 프로젝트는 단 하나의 스토어만 가질 수 있다. 스토어 안에는 현재 애플리케이션 상태와 리듀서가 들어가 있으며, 그 외에도 몇 가지 중요한 내장 함수를 지니고 있다.

## 디스패치(dispatch)

디스패치는 스토어의 내장 함수 중 하나이다. 디스패치는 '액션을 발생시키는 것'이라고 이해하면 된다. 이 함수는 dispatch(action)과 같은 형태로 액션 객체를 파라미터로 넣어서 호출한다.  
이 함수가 호출되면 스토어는 리듀서 함수를 실행시켜서 새로운 상태를 만들어 준다.

## 구독(subscribe)

구독도 스토어의 내장 함수 중 하나이다. subscribe 함수 안에 리스너 함수를 파라미터로 넣어서 호출해 주면, 이 리스너 함수가 액션이 디스패치되어 상태가 업데이트될 때마다 호출된다.

```javascript
const listener = () => {
  console.log("상태가 업데이트됨");
};
const unsubscribe = store.subscribe(listener);

unsubscribe(); // 추후 구독을 비활성화할 때 함수를 호출
```
