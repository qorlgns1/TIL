# Web

웹 플랫폼과 프론트엔드 개발 관련 문서를 주제별로 정리합니다.

## API

| 문서 | 상태 | 분류 이유 |
| --- | --- | --- |
| [GraphQL](./api/GraphQL.md) | 초안 | SQL과 GraphQL의 차이만 간단히 기록되어 있고 핵심 개념과 출처가 부족함 |

## Browser

| 문서 | 상태 | 분류 이유 |
| --- | --- | --- |
| [브라우저 저장소 비교](./browser/differences-in-each-browser-storage.md) | 업데이트 필요 | 브라우저별 용량·정책처럼 변할 수 있는 정보 재검증 필요 |
| [홈페이지가 사용자에게 보이기까지](./browser/how-to-show-homepage-to-user.md) | 업데이트 필요 | 렌더링 과정과 리소스 로딩 설명을 현재 브라우저 기준으로 재검증할 필요가 있음 |
| [메시지 큐와 이벤트 루프](./browser/message-queue-event-loop.md) | 초안 | 정의만 있는 짧은 메모로 실행 순서와 큐 구분 설명이 부족함 |

## CSS

| 문서 | 상태 | 분류 이유 |
| --- | --- | --- |
| [CSS naming convention](./css/CSS-naming-convention.md) | 검토 완료 | BEM 명명 규칙을 독립적인 예제로 정리 |
| [CSS 변수 사용하기](<./css/Using-CSS-custom-properties(variables).md>) | 검토 완료 | 사용자 정의 속성의 기본 사용법과 fallback을 정리 |
| [대체 CSS 박스 모델](./css/alternative-css-box-model.md) | 검토 완료 | `box-sizing`을 이용한 박스 모델 차이를 예제로 설명 |
| [가운데 정렬하기](./css/center-sort.md) | 검토 완료 | margin과 flex를 이용한 정렬 실험 기록 |
| [:first-child와 :first-of-type](./css/first-child-and-first-of-type.md) | 업데이트 필요 | 다시 확인할 자료 표시가 남아 있고 선택자 설명 재검토 필요 |
| [flex](./css/flex.md) | 업데이트 필요 | 오래된 브라우저 호환 정보와 방대한 속성 설명 재검증 필요 |
| [float](./css/float.md) | 업데이트 필요 | 과거 레이아웃 기법과 질의응답 중심 설명을 현대적인 사용 맥락으로 보완할 필요가 있음 |
| [레이아웃 영역 나누기](./css/layout.md) | 업데이트 필요 | float 기반 레이아웃과 overflow 설명 재검토 필요 |
| [마진 겹침](./css/margin-collapsing.md) | 검토 완료 | 마진 상쇄 조건을 예제와 함께 정리 |
| [overflow](./css/overflow.md) | 업데이트 필요 | BFC 설명과 깨진 외부 링크 문법을 바로잡을 필요가 있음 |
| [position](./css/position.md) | 검토 완료 | position 값과 기준점을 예제 중심으로 정리 |
| [도움되는 사이트](./css/도움되는사이트정리.md) | 보관 | 외부 도구 링크를 모은 짧은 목록 |

## Fundamentals

| 문서 | 상태 | 분류 이유 |
| --- | --- | --- |
| [웹 사이트 디자인 시작하기](./fundamentals/basic.md) | 업데이트 필요 | 번역·요약된 오래된 외부 자료로 원문과 현재 유효성 재검토 필요 |

## HTML

| 문서 | 상태 | 분류 이유 |
| --- | --- | --- |
| [Embedded Content](./html/Embedded-Content.md) | 업데이트 필요 | 요소별 지원 상태와 권장 사용법을 현재 표준 기준으로 재검증할 필요가 있음 |
| [Grouping Content](./html/Grouping-Content.md) | 업데이트 필요 | 태그 설명과 오탈자를 현재 HTML 표준에 맞춰 검토할 필요가 있음 |
| [HTML Living Standard](./html/HTML-Living-Standard.md) | 업데이트 필요 | 2022년 당시의 표준 통합 설명과 참고 자료 재검증 필요 |
| [HTML5](./html/HTML5.md) | 업데이트 필요 | HTML4/HTML5 구분 중심의 오래된 설명을 Living Standard 관점으로 개편할 필요가 있음 |
| [HTML Table](./html/Table.md) | 업데이트 필요 | 접근성 예제와 출처를 보강할 필요가 있음 |
| [시맨틱 HTML 태그](./html/semantic-tag-info.md) | 업데이트 필요 | 다시 확인할 표시와 오래된 통계 기반 참고 자료가 포함됨 |

## HTTP

| 문서 | 상태 | 분류 이유 |
| --- | --- | --- |
| [인터넷 네트워크](./http/1.인터넷-네트워크.md) | 업데이트 필요 | TCP/IP 계층과 프로토콜 설명의 정확성·용어 재검증 필요 |
| [URI와 웹 브라우저 요청 흐름](./http/2.URI와-웹-브라우저-요청-흐름.md) | 업데이트 필요 | URI·URL·URN 및 요청 흐름 설명을 최신 표준과 대조할 필요가 있음 |
| [HTTP 기본](./http/3.HTTP-기본.md) | 업데이트 필요 | HTTP 버전별 특성과 연결 방식 설명 보강 필요 |
| [HTTP 메서드](./http/4.HTTP-메서드.md) | 업데이트 필요 | 메서드의 안전성·멱등성과 상태 변경 설명 재검증 필요 |
| [HTTP 메서드 활용](./http/5.HTTP-메서드-활용.md) | 업데이트 필요 | 폼 전송과 API 설계 예제를 현재 관행에 맞게 검토할 필요가 있음 |
| [HTTP 참고 자료](./http/Reference.md) | 보관 | 강의와 외부 문서 링크를 모은 출처 목록 |

## JavaScript

| 문서 | 상태 | 분류 이유 |
| --- | --- | --- |
| [Promise](./javascript/promise.md) | 업데이트 필요 | 이벤트 루프와 microtask 실행 과정에 부정확하거나 미완성인 설명이 포함됨 |
| [this, call, apply, bind](./javascript/this-call-apply-bind.md) | 업데이트 필요 | 예제와 출처가 부족해 바인딩 규칙 전반을 재검토할 필요가 있음 |
| [바닐라 JavaScript import/export](./javascript/vanilla-javascript-import-export.md) | 업데이트 필요 | 브라우저 모듈 지원과 실행 절차를 현재 환경 기준으로 갱신할 필요가 있음 |
| [속 깊은 JavaScript](./javascript/속깊은Javascript.md) | 초안 | 내용이 비어 있음 |
| [JavaScript 개념](<./javascript/자바스크립트 개념.md>) | 초안 | 여러 개념이 짧은 메모로만 남아 있고 설명과 예제가 부족함 |
| [재밌는 JavaScript 사이트](./javascript/재밌는사이트.md) | 보관 | 외부 사이트 링크만 모은 목록 |
| [정규식](./javascript/정규식.md) | 검토 완료 | `replace` 중심의 짧은 사용 예제 기록 |

## Network

| 문서 | 상태 | 분류 이유 |
| --- | --- | --- |
| [인터넷은 어떻게 동작하는가](./network/인터넷은어떻게동작하는가.md) | 업데이트 필요 | 네트워크 구성 설명과 외부 출처를 현재 기준으로 재검증할 필요가 있음 |

## React

| 문서 | 상태 | 분류 이유 |
| --- | --- | --- |
| [Redux](./react/Redux.md) | 업데이트 필요 | 고전 Redux 사용법 중심이며 Redux Toolkit 등 현재 권장 흐름이 반영되지 않음 |

## Rendering

| 문서 | 상태 | 분류 이유 |
| --- | --- | --- |
| [SSR과 CSR](<./rendering/SSR,CSR.md>) | 업데이트 필요 | SPA·MPA·SSR 관계와 현대 프레임워크의 렌더링 방식을 보강할 필요가 있음 |

## Security

| 문서 | 상태 | 분류 이유 |
| --- | --- | --- |
| [CORS](./security/CORS.md) | 업데이트 필요 | preflight 조건과 CORS가 보장하는 보안 범위를 더 정확히 설명해야 함 |
| [JWT](./security/JWT.md) | 업데이트 필요 | 서명과 암호화의 차이, 만료·폐기·보관 방식과 보안 주의점이 빠져 있음 |

## Tooling

| 문서 | 상태 | 분류 이유 |
| --- | --- | --- |
| [Hot Module Replacement](./tooling/HotModuleReplacement.md) | 업데이트 필요 | webpack 중심의 오래된 동작 설명과 참고 링크 재검증 필요 |
| [Babel](./tooling/babel.md) | 초안 | 정의만 있는 짧은 메모로 설정과 변환 과정 설명이 부족함 |
| [Webpack](./tooling/webpack.md) | 업데이트 필요 | 설정과 기능 설명을 최신 webpack 기준으로 재검증할 필요가 있음 |
| [번들러](./tooling/번들러.md) | 업데이트 필요 | webpack 설치·설정 예제가 오래되었고 다른 현대적 도구와 비교가 필요함 |

## TypeScript

| 문서 | 상태 | 분류 이유 |
| --- | --- | --- |
| [TypeScript](./typescript/typescript.md) | 초안 | interface와 type 설명의 일반화 및 미해결 질문이 남아 있음 |
