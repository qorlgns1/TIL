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
