<h1 align="center">gatsby-starter-dom</h1>

## 소개


## 기능
- 마크다운 지원
- 코드 하이라이팅 지원
- 목차(TOC) 자동 생성 지원
- Utterances 댓글 지원
- Google analytics 지원
- 다크모드 지원

<br/>

## 시작하기

### 실행하기
```sh
$npm install

$npm start
```
위 명령어를 통해 [http://localhost:8000](http://localhost:8000)에서 확인할 수 있습니다.

<br/>

## 블로그 설정

### blog-config.js 작성
```jsx
  siteUrl: `https://myblog.com`, // https://ch4md0m.blog
  title: `My Blog`, // ch4md0m.blog
  description: `This is my blog.`, // 기록하는 프론트엔드 개발자
  ga: "Google Analytics Tracking ID",
```

### 댓글(Utterances) 설정
```jsx
  comments: {
    utterances: {
      repo: `{YOUR_GITHUB_NAME}/{YOUR_REPO_NAME}`, // CH4MD0M/ch4md0m.blog
    },
  },
```

### 글쓴이(Author) 설정
`author`에 입력하신 정보는 글쓴이를 소개하는 Bio에 사용됩니다. `name`에 입력하신 정보는 기본페이지에서 Hero 컴포넌트의 이름에 사용됩니다.
```jsx
  author: `Kihoon`,
  name: `노기훈`, // Hero component에 띄울 이름
  socials: {
    email: "qwer@gmail.com",
    github: "https://www.github.com/",
    instagram: `https://www.instagram.com/`,
  },

```

### 

<br/>

## 글쓰기
### frontmatter 작성
`index.md` 파일의 상단에 아래와 같은 형태로 `frontmatter`을 작성해야 합니다.
```
---
title: "블로그 시작하기"
category: blog
date: 2022-10-25
author: Kihoon
---
```

### 이미지 파일
글에 이미지를 첨부하고 싶다면 `index.md` 파일과 같은 디렉토리에 이미지를 추가하고 아래와 같이 사용할 수 있습니다.
```md
![이미지](./[이미지 파일명])
```
이미지의 크기(width)를 설정하고 싶다면 아래와 같이 사용할 수 있습니다.
```
<img src="./[이미지 파일명]" width="400px" alt="alt" />
```

## 커스터마이징
아래의 폴더 구조를 참고하여 커스터마이징 할 수 있습니다.
```
src
 ┣ components
 ┃ ┃ Article
 ┃ ┃ ┗ Body
 ┃ ┃   ┗ PostMarkdown // markdown styles are here.
 ┃ ┣ Bio
 ┃ ┣ Element
 ┃ ┃ ┗ PrismSetup.js
 ┃ ┣ Hero
 ┃ ┣ Seo
 ┣ state // redux state are here.
 ┣ style // global styles are here.
 ┗ templates // template components are here.
```




<sub><sup>Written by <a href="https://github.com/ch4md0m">@ch4md0m</a></sup></sub>
