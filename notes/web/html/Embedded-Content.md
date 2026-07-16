# Embedded content

## img태그

`<img>` 태그는 html 페이지에 이미지를 삽입할 때 사용하는 태그입니다.

### Attribute

1. src (source)

   - `<img>` 태그는 src라는 필수 속성이 있어야 합니다. src 속성은 브라우저에게 이미지 파일의 위치 및 파일명을 알려줍니다. 큰따옴표 안에 들어가는 경로는 절대경로이거나 상대경로이어야 합니다.

2. alt (alternative text)
   - alt 속성은 이미지가 보이지 않을 때 alt 속성에 적힌 텍스트를 이미지 대신 보여줍니다. 또한 스크린리더와 같은 접근성을 위한 프로그램에 정보를 제공하기 위한 용도로 사용되며, 브라우저에 이미지에 대한 정보를 전달함으로써 SEO(Search Engine Optimization)에 도움을 주기도 합니다.
   - alt가 공백이면 스크린 리더가 아무것도 읽지 않고, alt 속성이 아예없으면 스크린 리더가 이미지 파일 이름을 읽습니다. 따라서 무의미한 이모티콘 같은 경우 alt="" 속성을 주는것이 맞습니다.

```html
<img src="img/a.jpg" alt="이미지 없음" />
<img src="img/a.jpg" alt="" />
<img src="img/a.jpg" alt="스크린 리더가 읽어야 하는 문구" />
```

## picture 태그

`<picture>` 요소는 `<source>` 요소와 `<img>` 요소를 통해 각기 다른 디스플레이 혹은 디바이스에 따라 조건에 맞는 이미지를 보여주는 요소입니다. `<img>` 요소의 srcset 이 화면에 따른 이미지의 크기를 조절한다면 `<picture>` 요소는 이미지 포맷 자체를 변경 할 수 있습니다.

```html
<picture>
  <source srcset="babies_large.jpeg" media="(min-width:960px)" />
  <source srcset="babies.jpeg" media="(min-width:620px)" />
  <img src="babies_small.jpeg" alt="귀여운 아기 팽귄들" />
</picture>
```

- media 속성  
  위의 코드에서 `<source>` 요소 안의 `media` 속성을 볼 수 있습니다. `<picture>` 요소는 `media` 속성의 값을 통해 조건에 알맞는 이미지를 찾게 됩니다. 조건에 맞는 `<source>` 요소 안의 `srcset` 속성 값을 찾아 `<img>` 태그의 `src` 에 넣어 화면에 보여주게됩니다. 이러한 구조로 작동하기 때문에 `<img>` 요소가 없다면 이미지가 화면에 나타나지 않는다는 점에 주의하세요. `<picture>` 와 `<source>` 요소 자체는 이미지를 표현하지 않습니다.

- type 속성  
  이미지의 포맷 타입을 브라우저에게 알려줍니다.

```html
<picture>
  <source srcset="babies.webp" type="image/webp" />
  <source srcset="babies.avif" type="image/avif" />
  <img src="babies.jpeg" alt="귀여운 아기 팽귄들" type="image/jpeg" />
</picture>
```

- 위에서부터 차례대로 브라우저가 지원하는 포맷인지 탐색하며 만약 지원하지 않는 포맷이라고 판단되면 다음 `<source>` 요소로 넘어갑니다. 만약 모든 `<source>` 요소의 이미지 사용이 불가능하면 최후에 `<img>` 요소의 이미지를 랜더링 합니다. 때문에 WebP나 AVIF 와 같은 최신 포맷의 이미지를 지원하고 싶다면 크로스브라우징을 위해 `<picture>` 요소와 함께 사용 하는것이 좋습니다. 이러한 방식의 크로스브라우징 기법을 ‘점진적 향상기법’이라고 합니다.

> <b>점진적 향상기법</b>  
>  기본적으로 예전 기술 환경에서 동작할 수 있는 기능을 구현해두고, 최신 기술을 사용할 수 있는 환경에서는 최신 기술을 제공하여 더 나은 사용자 경험을 제공할 수 있는 방법입니다.

> <b>이미지 포맷의 종류</b>
> GIF(Graphics Interchange Format) :
> 256색의 컬러만 표현 가능하기 때문에 선명하진 않지만 용량이 적게 듭니다. 투명은 표현 가능하지만 그 정도를 조절하는건 불가능하며, 때문에 그림자 표현도 불가능합니다. 애니메이션 처리가 가능합니다.
>
> JPG/JPEG (Joint Photographic Expert Group image):
> 매우 화소가 높고, 용량도 적지만 투명처리가 불가능합니다.
>
> PNG (Portable Network Graphics) :
> 왠만한 컬러는 모두 표현 가능하여 투명 영역을 처리 가능하지만 용량이 큽니다.
>
> SVG (Scalable Vector Graphics) :
> SVG 형식의 벡터 이미지는 손실이나 품질 저하 없이 모든 크기에서 렌더링이 가능합니다.
>
> WebP (Web Picture Format) :
> 압축률이 좋다고 소문난 JPEG 이미지에 비해 무려 용량은 70% 수준으로 낮지만 더 뛰어난 색상을 지원하는 포맷입니다. 그럼에도 불구하고 PNG 처럼 투명도 표현 가능하며, GIF 처럼 애니메이션 표현도 가능한 만능 포맷입니다.
>
> AVIF (AV1 Image File Format) : WebP 처럼 뛰어난 색상표현, 애니메이션 지원, 투명도 표현 모두 가능하며 JPEG 이미지의 50% 수준인 용량을 자랑하는 차세대 이미지 포맷입니다. 아직 지원하지 않는 브라우저가 많음에 주의해야합니다.

## iframe 태그

iframe은 현재 HTML 페이지에서 또 다른 HTML 페이지를 보여주고 싶을 때 사용합니다. iframe은 width 혹은 height 속성으로 크기를 조절합니다. 따로 값을 설정하지 않는다면 height는 150px, width는 300px을 기본값으로 합니다. src 속성으로 불러올 HTML링크를 설정할 수 있으며 보통 youtube 영상을 불러올 때 많이 사용합니다. youtube 영상을 불러오게 되면 보통 아래와 같은 속성값들을 가지게 됩니다.

```html
<iframe
  width="1280"
  height="720"
  src="https://www.youtube.com/embed/-iuX3r8PSzU"
  frameborder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
>
</iframe>
```

### Attribute

- frameborder : 테두리를 그려줄지 결정합니다. 0 혹은 1의 값을 가집니다. 이제 더는 사용하지 않는 값이며 CSS의 border 속성을 대체되었습니다.
- allow : iframe 에서 허용할 기능들을 지정합니다.
- allowfullscreen : 전체화면을 지원합니다.

> autoplay 속성은 브라우저 정책 상 일부 모바일 브라우저에 작동하지 않을 수 있으며, 항상 mute 속성과 함께 사용되어야 합니다.
> 이는 모바일 환경에서 autoplay 기능으로 인한 의도하지 않은 트래픽 유발을 방지하고 접근성 측면에서 좋지 않기 때문입니다.
> 이러한 특징은 `<iframe>, <audio>, <video>` 요소 모두 동일하게 적용됩니다.
>
> - 참고 : https://developer.mozilla.org/ko/docs/Web/Media/Autoplay_guide
> - 나쁜 예 : https://codingparty.goorm.io/codinghero

## autio 태그

`<audio>` 는 음악 컨텐츠를 재생하기 위한 태그입니다. src 속성은 브라우저에게 오디오 파일의 위치 및 파일명을 알려줍니다.

```html
<audio controls>
  <source src="flow.ogg" type="audio/ogg" />
  <source src="flow.mp3" type="audio/mpeg" />
</audio>
```

### Attribute

- controls : 음악 파일을 제어할 수 있는 컨트롤러를 불러옵니다.
- autoplay : 로딩이 완료된 파일을 자동으로 재생합니다.(Chrome에서 정책상 autoplay가 안됩니다. 간혹 되는 경우도 있으나 정책상 안되는 것이 맞습니다. 그래서 js로 컨트롤합니다.)
- loop : 음악을 반복합니다.

> `<audio>` 요소 역시 `<source>` 요소를 자식으로 사용할 수 있습니다. 다른 요소와 마찬가지로 크로스 브라우징을 위해 여러 포맷의 파일을 지원할 수 있습니다.

## video 태그

`<video>` 는 동영상 파일을 재생하기 위한 태그입니다. 기본적인 사용법을 알아보겠습니다.

다음과 같은 코드를 사용하면 크로스브라우징과, 좀 더 사용자 친화적인 비디오를 구현 할 수 있습니다.

```html
<!--기본-->
<video src="batman.mp4" controls autoplay loop width="450" height="300"></video>

<!--활용-->
<video controls poster="batman.jpeg" preload="auto" width="450" height="300">
  <source src="batman.mp4" type="video/mp4" />
  <source src="batman.ogv" type="video/ogg" />
  <source src="batman.webm" type="video/webm" />
  <track kind="subtitles" src="foo.en.vtt" srclang="ko" label="batman" />
</video>
```

### Attribute

- src : 브라우저에게 비디오 파일의 위치 및 파일명을 알려줍니다.
- controls : 영상 파일을 재생하는데 필요한 컨트롤러를 불러옵니다.
- autoplay : 로딩이 완료되면 자동으로 영상 파일을 재생시킵니다.(크롬에서 현재 사용이 안되었음.)
- loop : 영상이 종료되면 다시 반복해서 재생합니다.
- preload : 좋은 사용자 경험을 위해 고려해 볼 수 있는 속성입니다. (기본 값은 브라우저마다 다릅니다.)
  - none : 비디오 파일을 미리 로딩하지 않습니다. 서버가 최소한의 트래픽을 유지하며 페이지 로딩이 좀 더 빨라집니다.
  - metadata : 비디오 파일을 미리 로딩하지 않지만 파일의 메타데이터(예를 들어서 영상의 길이)를 미리 가져오도록 합니다.
  - auto : 비디오 파일을 미리 로딩하여 사용자가 바로 영상을 볼 수 있도록 준비합니다.
- poster : 영상이 로딩 중 일 때 대신해서 화면에 보여줄 이미지를 지정합니다.
- `<source>` : 다른 embedded 요소들과 마찬가지로 source 요소를 통해 브라우저가 지원하는 파일 포멧을 여러가지 지정할 수 있습니다.
- `<track>` : `<audio>` 혹은 `<video>` 요소의 자식으로 자막과 같은 시간 기반 텍스트 데이터(텍스트 트랙)를 보여주고자 할 때 사용합니다.
  - kind : 텍스트 트랙의 종류를 지정합니다. subtitles(자막), captions(설명) 등을 지정할 수 있습니다.
  - srclang : 텍스트 트랙의 언어를 지정합니다.
  - label : 텍스트 트랙의 제목을 정합니다.

> WebVTT (Web Video Text Tracks)
> `<track>` 요소에서 사용할 자막 파일 포맷입니다. .vtt 로 표시합니다.
>
> - 자막 작성법 참고 : [https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API](https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API)

> 자막 (subtitles) VS 설명 (captions)
> 자막 (subtitles) : 시청자가 이해할 수 없는 언어에 대한 번역을 제공합니다.  
> 설명 (captions) : 자막을 포함한 오디오 트랜스크립션을 제공합니다.  
> 오디오 트랜스크립션이란 소리를 내는 주체, 음악이나 효과와 같은 비 언어적 소리를 포함한 모든 소리 데이터를 문자로 표현하는것을 말합니다.  
> 주로 청각장애를 가진 사용자에게 적합합니다.

> 코덱(codec)과 포맷(format)  
> 웹에서 최적의 비디오 영상을 출력하는 것은 이미지 포맷을 선택하는것에 비해 복잡합니다.
> 그 이유는 코덱과 포맷(확장자) 때문인데요.
>
> 1.  코덱은 촬영을 통해 얻은 원본 영상을 편집하여 압축한 결과물을 의미하고 (H.246, ProRes 등등)
> 2.  포맷은 코덱을 담아 재생 가능한 플레이어에 전달되는 컨테이너의 역할을 합니다. (mp4, WebM 등등)
>     결국 비디오 파일은 코덱과 포맷의 조합임을 알 수 있습니다.
>     사용한 코덱의 종류에 따라 영상의 퀄리티와 용량이 결정되고, 코덱에 따라 담을 수 있는 포맷도 다르며,> 브라우저에 따라 지원하는 코덱과 포맷이 모두 다르기 때문에(^^;;) 사용하고자 하는 용도에 따라 신중하게 결정하도록 합니다.
>     다행히 다음 페이지에서 브라우저에 따른 지원 코덱 그리고 케이스에 따른 최적의 코덱과 포맷을 참고할 수 있습니다.
> 3.  코덱의 정보와 브라우저별 코덱 지원 현황
>     [https://developer.mozilla.org/ko/docs/Web/Media/Formats/Video*codecs#코덱*세부사항](https://developer.mozilla.org/ko/docs/Web/Media/Formats/Video_codecs#%EC%BD%94%EB%8D%B1_%EC%84%B8%EB%B6%80%EC%82%AC%ED%95%AD)
> 4.  케이스별 코덱과 컨테이너 조합
>     [https://developer.mozilla.org/ko/docs/Web/Media/Formats/Video*codecs#코덱*선택하기](https://developer.mozilla.org/ko/docs/Web/Media/Formats/Video_codecs#%EC%BD%94%EB%8D%B1_%EC%84%A0%ED%83%9D%ED%95%98%EA%B8%B0)
> 5.  비디오 파일의 제작 과정
>     <br> ![](https://paullabworkspace.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F4c4b05f3-b7f7-48ff-a02f-5270c2eb0d78%2F%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-02-16_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_4.08.34.png?table=block&id=40d740ab-21a3-446b-93c1-fe6f524e43c0&spaceId=579fe283-28aa-489d-ae65-d683304becfc&width=2000&userId=&cache=v2)
