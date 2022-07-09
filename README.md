# 교내 '강서구 알리기' 웹 서비스 구현 경진 대회 1등 웹

## 프로젝트 설명

2학년 1학기 교내에서 진행한 강서구 알리기 웹 경진 대회를 참가하며 만들게 된 웹입니다.
부산광역시 강서구 내의 명소, 랜드마크를 소개하고 간단한 테스트를 통해 35개의 강서구 관광지 중 한 장소를 추천 받을 수 있습니다.

1. **Home**

![home](https://kimhyerin.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F4748d964-e241-414e-8be6-fa42b0b60aab%2FUntitled.png?table=block&id=c77279b2-048d-42f9-940f-162328ab6c37&spaceId=78ff6816-d29d-4118-bc79-82a8ff2f87a2&width=2000&userId=&cache=v2)

1. **Landmark**

![landmark](https://kimhyerin.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc56402ea-4308-43f8-9490-6a9016d1a23b%2FUntitled.png?table=block&id=9063a8fb-88da-4800-ba0f-33c079d559ee&spaceId=78ff6816-d29d-4118-bc79-82a8ff2f87a2&width=2000&userId=&cache=v2)

1. **Tendency test**

![tendency](https://kimhyerin.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F4fa1307b-0f91-4df7-9883-b7f2eeb5c19e%2FUntitled.png?table=block&id=4dd961d4-32e9-4a78-b5d6-9afb666ca9ec&spaceId=78ff6816-d29d-4118-bc79-82a8ff2f87a2&width=2000&userId=&cache=v2)

1. **Tendency test - quiz**

![quiz](https://kimhyerin.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff37d025d-62fe-4cf4-8ac6-af7709812df3%2FUntitled.png?table=block&id=ed5fae4a-1367-4cc4-9e1b-94ea5f8945f8&spaceId=78ff6816-d29d-4118-bc79-82a8ff2f87a2&width=2000&userId=&cache=v2)

1. **Tendency test - result**

![result](https://kimhyerin.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F40e0ea21-b43f-4005-9e8c-41779b3e8df3%2FUntitled.png?table=block&id=02457df8-c166-4d77-98bc-cb7c3bf8df2f&spaceId=78ff6816-d29d-4118-bc79-82a8ff2f87a2&width=2000&userId=&cache=v2)

## 프로젝트 팀원

- [김혜린](https://github.com/kimhyerin0909)
    - 웹 UI/UX 디자인
    - FrontEnd, API 개발 및 배포
    - 웹 서버 배포
- [진유림](https://github.com/YuLim2)
    - 구글 강서구 명소 데이터 크롤링 후 DB에 저장

## 프로젝트 정보

### 웹 주소

[http://15.165.248.93:3000/](http://15.165.248.93:3000/)

<aside>
💡 도메인 주소를 사용하고 싶었으나, 기한 내 시간이 부족해 못 했습니다. (추후 변경 예정)
2022.07.09 서버 접속 가능

</aside>

### 사용 기술

- FrontEnd
    - React
    - sass
- BackEnd
    - Node.js
    - Express
    - AWS (EC2, RDS)
    - MySQL
- Data Crawling
    - python
    - https://github.com/YuLim2/Gangseo-gu_project

## 외부 리소스

- [KAKAO Maps API](https://apis.map.kakao.com/web/)
- 강서구
    - [상징 캐릭터 청두리](https://www.bsgangseo.go.kr/bsgangseo/contents.do?mId=0502040200)
    - [홍보 영상](https://www.youtube.com/watch?v=bdiVeIyM6fI&feature=emb_imp_woyt)
    - [관광 명소 사진](https://www.bsgangseo.go.kr/visit/main.do)
- 구글 강서구 명소 데이터
- [Lottie Files](https://lottiefiles.com/)
