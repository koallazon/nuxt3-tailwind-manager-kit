# Nuxt 3와 TailwindCSS로 만든 관리자 사이트 템플릿

## Setup

패키지 설치

- 패키지 매니저는 pnpm을 사용합니다.
- node는 현재 lts버전인 v18.12.1을 사용합니다.

```bash
# pnpm
pnpm install --shamefully-hoist

# pnpm 공식 메뉴얼에 나와있는 --shamefully-hoist 옵션에 대한 설명
node_modules를 flat하게 만들어준다. npm이나 yarn과 유사하며 권장하진 않는다.

```

## Development Server

Start the development server on http://localhost:3000

```bash
# local 환경 개발서버 (.env.local)
pnpm dev

# dev 환경 개발서버 (.env.dev)
pnpm  dev:dev

# qa 환경 개발서버 (.env.qa)
pnpm  dev:qa

# production 환경 개발서버 (.env.prod)
pnpm  dev:prod
```

## Production

```bash
# local 환경 빌드 (.env.local)
pnpm build:local

# dev 환경 빌드 (.env.dev)
pnpm build:dev

# qa 환경 빌드 (.env.qa)
pnpm build:qa

# production 환경 빌드 (.env.prod)
pnpm build:prod
```

##### 빌드 산출물로 서버 띄우기

```bash
pnpm preview
# or
node .output/server/index.mjs
```

## Icon

구글 Icon 사용

- 아이콘 목록: https://fonts.google.com/icons
- 호출 위치: nuxt.config.ts - app.head.link
- 설정: 현재 outlined 타입으로 설정되어 있다. rounded, sharp 타입으로도 추가해서 사용도 가능하다.<br>

위의 사이트에서 아이콘을 선택한 후 'Inserting the icon'영역에 태그를 복사해서 템플릿 영역 안에 붙여넣으면 된다.

```HTML
<template>
    <span class="material-symbols-outlined">
        done
    </span>
</template>

```

## Font

- 구글 Web-Font 'Inter', 'NanumGothic'을 사용한다.
- 호출 위치: nuxt.config.ts - app.head.link

## 전역 CSS/SCSS

- tailwind.css
  - 경로: /assets/css/tailwind.css
  - 내용
    - tailwindcss 가져오기
    - @layer, @apply를 사용한 전역 설정
    - tailwind.config.js에서 사용하는 변수 선언
- scss
  - scrollbar: 스크롤바 스타일
  - transitions: page, layout transitions
  - variables: scss 전역 변수 선언
