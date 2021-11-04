// 이진트리순회 7까지만 탐색해보기
// 왼쪽 자식노드는 부모노드 * 2 , 오른쪽 자식노드는 부모노드 * 2 + 1
// 전위순회, 중위순회, 후위순회해보기.

const v = 1;

const solution = (v) => {
  let result = "";

  const DFS = (v) => {
    if (v > 7) {
      return;
    } else {
      //console.log(v); //전위순회시 주석해제
      DFS(v * 2);
      //console.log(v); //중위순회시 주석해제
      DFS(v * 2 + 1);
      console.log(v); //후위순회시 주석해제
    }
  };

  DFS(v);

  console.log(result);
};

solution(v);
