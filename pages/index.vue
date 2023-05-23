<script setup lang="ts">
const title = '홈'
useHead({
  title,
})
const promiseFunc = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('ok')
    }, 5000)
  })
}
</script>

<template>
  <page-container :title="title">
    <h2>여기는 {{ title }}입니다.</h2>
    <div>{{ $hello('world') }}</div>
  </page-container>
</template>

<style scoped></style>
