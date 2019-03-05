# Vokkit-world-format
Vokkit의 월드 포맷 관련 문서입니다.

모든 월드는 `worlds` 폴더 아래에서 월드 이름명 폴더 안에 저장됩니다.

* format.txt

월드가 무슨 포맷인지 저장하는 텍스트 파일입니다.

포맷 목록: `SimpleWorldFormat`

## SimpleWorldFormat
개발 테스트용으로 만든 간단 포맷입니다.

* data.spw

맵 블럭 데이터를 담고 있는 파일입니다.

리틀 엔디언 방식으로 `x`, `y`, `z`좌표를 4Byte integer로, 블럭 `id`를 4Byte unsigned integer로 하여 블럭 데이터가 작성되어 있습니다.

data 크기가 16Byte의 배수인지 확인하여 검증할 수 있습니다.

* worldName.txt

월드 이름을 저장하는 텍스트 파일입니다.