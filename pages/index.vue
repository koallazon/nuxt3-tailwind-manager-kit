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

onMounted(() => {
  nextTick(async () => {
    const data = await promiseFunc()
    console.log('🚀 ~ file: index.vue:17 ~ nextTick ~ data', data)
  })
})

// const { data } = await useAsyncData('count', promiseFunc)
// console.log('data', data)
</script>

<template>
  <page-container :title="title">
    <h2>여기는 {{ title }}입니다.</h2>
    <div>{{ $hello('world') }}</div>
  </page-container>
</template>

<style scoped></style>
