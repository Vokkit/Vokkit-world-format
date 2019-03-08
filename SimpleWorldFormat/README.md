# SimpleWorldFormat
개발 테스트용으로 만든 간단 포맷입니다.

* data.spw

맵 블럭 데이터를 담고 있는 파일입니다.

리틀 엔디언 방식으로 `x`, `y`, `z`좌표를 4Byte integer로, 블럭 `id`를 4Byte unsigned integer로 하여 블럭 데이터가 작성되어 있습니다.

data 크기가 16Byte의 배수인지 확인하여 검증할 수 있습니다.

* worldName.txt

월드 이름을 저장하는 텍스트 파일입니다.

## 월드 생성

이 폴더에 `data.json` 파일을 생성한 뒤 다음 포맷으로 작성하세요.

```js
{ "x": number, "y": number, "z": number, "id": number }[]
```

그리고 `WorldMaker.js` 스크립트를 실행하면 `data.spw` 파일이 생성됩니다.

## 월드 추출

이 폴더에 `data.spw` 파일을 붙여넣으세요.

그리고 `WorldReader.js` 스크립트를 실행하면 `data.json` 파일이 생성됩니다.