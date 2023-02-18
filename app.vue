<script setup lang="ts">
import { useAppStore } from '~/store/app'
const appStore = useAppStore()
const app = useAppConfig()
const auth = useCookie('auth')
// const nuxtApp = useNuxtApp()
// console.log('🚀 ~ file: app.vue:7 ~ nuxtApp', process.server, nuxtApp)
// console.log('🚀 ~ file: app.vue:6 ~ auth', auth.value)

useHead({
  title: app.name,
  titleTemplate: '%s - 사이트',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'description',
      name: 'description',
      content: 'Nuxt3 manager kit',
    },
  ],
})

onMounted(() => {
  appStore.initTheme()
})
</script>

<template>
  <NuxtLayout>
    <!--
      전역 로딩바 작업 중
      <Teleport to="body">
      <div
        v-if="appStore.loading || true"
        class="fixed left-0 top-0 h-0.5 w-screen h-screen z-50 bg-green-500"
      />
    </Teleport> -->

    <!-- <nuxt-loadingindicator>
      <div class="w-screen h-screen flex justify-center align-center">로딩.....</div>
    </nuxt-loadingindicator> -->
    <NuxtPage />
  </NuxtLayout>
</template>
