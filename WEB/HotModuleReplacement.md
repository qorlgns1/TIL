# 핫 모듈 리플레이스먼트(Hot Module Replacement - HMR)

핫 모듈 리플레이스먼트(Hot Module Replacement - HMR)는 웹팩이 제공하는 가장 유용한 기능 중 하나입니다. 전체 새로고침 없이 모든 종류의 모듈들을 런타임 시점에 업데이트 되게 해줍니다. 이 가이드에서는 구현에 초점을 두고 설명합니다. 어떻게 동작하는지, 왜 유용한지에 대한 더 자세한 내용은 [concept page](https://webpack.js.org/concepts/hot-module-replacement/) 를 확인하십시오.

> HMR 은 프로덕션에서 사용하기 위한 것이 아닙니다. 개발에서만 사용하십시오. 자세한 내용은 [building for porduction guide](https://webpack.js.org/guides/production/)를 참고하십시오.

Hot Module Replacement(HMR)는 모듈 전체를 다시 로드하지 않고 애플리케이션이 실행되는 동안 교환, 추가 또는 제거합니다. 다음과 같은 몇 가지 방법으로 개발 속도를 크게 높일 수 있습니다.

- 전체 다시 로드 중에 손실되는 애플리케이션의 상태를 유지
- 변경된 사항만 갱신하여 개발 시간을 절약
- 소스 코드에서 CSS/JS를 수정하면 브라우저에서 즉시 업데이트합니다. 이는 브라우저의 개발자 도구에서 직접 스타일을 변경하는 것과 거의 비슷

## How It Works

---

HMR이 어떻게 작동하는지 정확히 이해하기 위해 몇 가지 다른 관점을 살펴보겠습니다.

### In the Application

다음 단계를 통해 애플리케이션에서 모듈을 교체할 수 있습니다.

1. 애플리케이션은 HMR 런타임에 업데이트된 내용이 있는지 확인하도록 요청합니다.
2. 런타임에서 업데이트된 내용을 비동기적으로 다운로드받고 애플리케이션에 알립니다.
3. 그런 다음 애플리케이션은 런타임에 업데이트를 요청합니다.
4. 런타임은 업데이트를 동기적으로 적용합니다.

이 프로세스가 자동으로 발생하도록 HMR을 설정하거나 업데이트가 발생하기 위해 사용자 상호 작용을 요구하도록 선택할 수 있습니다.

### In the Compiler

일반 애셋 외에도 컴파일러는 이전 버전에서 새 버전으로 업데이트할 수 있도록 "업데이트"를 내보내야 합니다. "업데이트"는 두 부분으로 구성됩니다.

1. 업데이트된 [매니페스트](https://webpack.kr/concepts/manifest/) (JSON)
2. 하나 이상의 업데이트 된 청크 (JavaScript)

매니페스트에는 새 컴파일 해시와 업데이트된 모든 청크 목록이 포함됩니다. 각 청크에는 업데이트된 모든 모듈에 대한 새 코드(또는 모듈이 제거되었음을 나타내는 플래그)가 포함됩니다.

컴파일러는 빌드 간에 모듈 ID와 청크 ID가 일치하는지 확인합니다. 일반적으로 이러한 ID를 메모리에 저장하지만 (예: webpack-dev-server 사용) JSON 파일에 저장할 수도 있습니다.

### In a Module

HMR은 HMR 코드가 포함된 모듈에만 영향을 미치는 선택적인 기능입니다. 한 가지 예는 style-loader를 통해 스타일을 가져오는 것입니다. 패치가 작동하기 위해 style-loader는 HMR 인터페이스를 구현합니다. HMR을 통해 업데이트를 받으면 이전 스타일을 새 스타일로 대체합니다.

마찬가지로 모듈에서 HMR 인터페이스를 구현할 때 모듈이 업데이트될 때 어떤 일이 발생해야 하는지 설명할 수 있습니다. 그러나 대부분의 경우 모든 모듈에서 HMR 코드를 작성해야 하는 것은 아닙니다. 모듈에 HMR 핸들러가 없으면 업데이트가 버블링됩니다. 이는 단일 핸들러가 전체 모듈 트리를 업데이트 할 수 있음을 의미합니다. 트리의 단일 모듈이 업데이트되면 전체 종속성 집합이 다시 로드됩니다.

module.hot 인터페이스에 대한 자세한 내용은 [HMR API 페이지](https://webpack.kr/api/hot-module-replacement/)를 참고하세요.

## Reference

[HMR](https://ibrahimovic.tistory.com/47)
[Hot Module Replacement](https://webpack.kr/concepts/hot-module-replacement/)
