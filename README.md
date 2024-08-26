<h1 align="center">gatsby-starter-dom</h1>

## Demo

- [템플릿 데모 보러가기](https://ch4md0m.github.io/gatsby-starter-dom/)

## 🛠️기능지원

- 📄마크다운(md, mdx) 지원
- 🔎게시글 검색 기능 지원
- 💄코드 하이라이팅 지원
- 🔖목차(TOC) 자동 생성 지원
- 🖇️태그 기능 지원
- 💬Utterances 댓글 지원
- 📊Google analytics 지원
- 🔨robots.txt, sitemap.xml, rss.xml 자동 생성
- 🌗다크모드 지원
- 💲katex 문법 지원

<br/>

## 🚀실행하기

### 1. gatsby 프로젝트 생성

> **node**는 v16 이상, **gatby-cli**는 꼭 v4를 설치해주세요.

```sh
npm i -g gatsby-cli@4.7.0
npx gatsby new my-blog https://github.com/CH4MD0M/gatsby-starter-dom
```

### 2. 템플릿 실행하기

```sh
cd my-blog
npm start
# localhost:8000에서 확인할 수 있습니다.
```

<br/>

## ⚙️블로그 설정

### blog-config.js 작성

```jsx
module.exports = {
  siteUrl: `https://my-blog.com`,
  title: ``, //gatsby-starter-dom
  description: ``, // 기록하는 프론트엔드 개발자
  utterances: {
    repo: ``, // CH4MD0M/gatsby-starter-dom
  },
  ga: '', // Google Analytics Tracking ID
  author: ``, // 게시글 author에 보여질 이름
  name: ``, // Hero 컴포넌트에 보여질 이름
  socials: {
    email: '', // mailto:{YOUR_EMAIL}
    github: '', // https://github.com/
    instagram: ``, // https://www.instagram.com/
  },
};
```

`author`에 입력하신 정보는 글쓴이를 소개하는 Bio에 사용됩니다. `name`에 입력하신 정보는 기본페이지에서 Hero 컴포넌트의 이름에 사용됩니다.

<br/>

## ✍🏻글쓰기

[글쓰기 가이드](https://ch4md0m.github.io/gatsby-starter-dom/blog/writing-guide/)에서 자세한 글 작성 방법을 확인할 수 있습니다.

<br/>

## 🐛버그 리포트 & 문의

궁금하신 점이나 버그 관련해서 [이슈](https://github.com/CH4MD0M/gatsby-starter-dom/issues)로 남겨주시면 최대한 빠르게 답변 드리겠습니다!😁
