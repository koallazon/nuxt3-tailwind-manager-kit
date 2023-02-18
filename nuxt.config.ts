// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'node:path'
import dotenv from 'dotenv'
import eslintPlugin from 'vite-plugin-eslint'

dotenv.config({
  path: path.resolve(__dirname, `.env.${process.env.DEPLOY_ENV || 'local'}`),
})
console.log('🚀 ~ file: nuxt.config.ts:9 ~ path', process.env.PORT)

// SSL을 사용하기 위해 추가
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

const isProd = process.env.NODE_ENV === 'production'

export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, user-scalable=0, viewport-fit=cover',
        },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Nanum+Gothic:wght@100;200;300;400;500;600;700;800;900&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined',
        },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon/favicon-192x192.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
        { rel: 'icon', href: '/favicon/favicon.ico' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },

  // Nuxt 사용자 개선 로그 전송 비활성화
  telemetry: false,

  // Nitro 웹서버 설정
  nitro: {
    // preset: isProd && false ? 'node-cluster' : 'node-server',
    preset: 'aws-lambda',
  },

  // vite
  vite: {
    plugins: [eslintPlugin()],
  },

  // 런타임 환경변수
  runtimeConfig: {
    // 서버 모드에서만 접근할 수 있는 환경변수
    apiSecret: process.env.API_SECRET_KEY,
    // public 안의 변수는 클라이언트 모드에서도 접근 가능
    public: {
      apiBaseURL: process.env.FND_API_BASE_URL,
    },
  },

  // vueuse 설정
  vueuse: {
    ssrHandlers: true,
  },

  // 경로 설정
  alias: {
    '@': '/<rootDir>',
    assets: '/<rootDir>/assets',
  },

  // 빌드 옵션
  build: {
    transpile: ['@headlessui/vue'],
  },

  // 모듈
  modules: [
    '@vueuse/nuxt',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', ['defineStore', 'definePiniaStore']],
      },
    ],
  ],

  plugins: [{ src: '~/plugins/myPlugins' }],

  // 전역 CSS
  css: ['~/assets/css/tailwind.css', '~/assets/scss/app.scss'],

  // postcss 설정, tailwindcss 설정하면서 추가됨
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // Nuxt.config.ts Lifecycle Hook(build, close...)
  hooks: {
    close: () => {
      // Nuxt lifecycle이 종료되는 시점
      console.log('close')
    },
  },
})
