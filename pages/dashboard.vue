<script setup lang="ts">
const title = '대시보드'
useHead({
  title,
})
definePageMeta({
  middleware: (to, from) => {
    console.log('dashboard to', to)
    console.log('dashboard from', from)
  },
})
</script>

<template>
  <page-container :title="title">
    <h2>여기는 {{ title }}입니다.</h2>
  </page-container>
</template>
