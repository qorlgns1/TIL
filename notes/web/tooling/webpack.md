# Webpack

웹팩은 자바스크립트 모듈 번들러로써 여러개로 나누어져 있는 파일들을 하나의 자바스크립트 코드로 압축하고 최적화하는 라이브러리입니다.

모듈 번들러는 다음과 같은 장점이 있습니다.

1. 여러 파일의 자바스크립트 코드를 압축하여 최적화 할 수 있기 때문에 로딩에 대한 네트워크 비용을 줄일 수 있습니다.
2. 모듈 단위로 개발이 가능하여, 가독성과 유지보수가 쉽습니다.
3. 최신 자바스크립트 문법을 지원하지 않는 브라우저에서 사용할 수 있는 코드로 쉽게 변환시켜 줍니다.

물론, 수 많은 자바스크립트 파일이 하나의 파일로 묶인다면 초기 로딩 속도가 커질 수 있습니다. 하지만 웹팩에서는 청크, 캐시, 코드 스플릿 개념들을 도입하면서 이 문제를 해결하고 있습니다.

웹팩은 Entry, Output, Loaders, Plugins, Mode로 구성되어 있으며, 각각의 역할음과 같습니다.

## Entry

- entry는 웹팩이 빌드할 파일의 시작 위치를 나타냅니다.
- entry 지점으로부터 import되어 있는 다른 모듈과 라이브러리에 대한 의존성을 찾습니다.
- entry의 디폴트로 설정된 값은 ./src/index.js 입니다.

```
module.exports = {
  entry: ' ./src/index.js'
};
```

## Output

- output은 웹팩에 의해 생성되는 번들을 내보낼 위치와 파일의 이름을 지정합니다.
- output의 기본값은 ./dist/main.js 입니다.

```
const path = require('path');

module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  }
};
```

## Loaders

- loaders를 통해 자바스크립트 파일이 아닌 파일들도 유효한 모듈로 변환시켜줍니다.
- loaders의 설정은 싱글 모듈에 대한 rules 프로퍼티를 정의해야 하며, rules 프로퍼티는 test와 use를 필수 프로퍼티로 가지고 있습니다.
- test 프로퍼티는 변환해야하는 파일 또는 파일들을 식별하는 역할을 합니다.
- use 프로퍼티는 변환되어야 하는 파일에 대하여 어떤 로더를 사용해야하는지 설정합니다.

```
const path = require('path');

module.exports = {
  output: {
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  }
};
```

## Plugins

- 로더가 파일단위로 처리하는 반면 플러그인은 번들된 결과물을 처리합니다.
- 번들된 자바스크립트를 난독화 한다거나 특정 텍스트를 추출하는 용도로 사용할 수 있습니다.

```
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};
```

## Mode

- mode는 웹팩을 세팅함에 있어서 development, production, none 중 하나를 파라미터로 사용합니다.
- “production”은 최적화되어 빌드되어집니다.
- “development”는 빠르게 빌드됩니다.
- “none”은 아무 기능 없이 웹팩으로 빌드됩니다.

```
module.exports = {
  mode: 'production'
};
```

## 정리

웹팩은 entry로 설정된 시작점에서 의존성을 가진 모든 파일을 압축하여 output 지점에 하나의 자바스크립트 파일을 만들어 줍니다. 이때, 자바스크립트가 아닌 파일은 loaders를 이용하여 자바스크립트에서 이용가능한 모듈로 만들어 주며, plugins를 이용하여 번들된 자바스크립트를 난독화하거나 특정 텍스트를 추출하는 역할을 합니다. mode는 웹팩의 사용 목적에 따라 설정을 지정하는 역할을 합니다.
