<script setup lang="ts">
const title = 'ν'
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
    console.log('π ~ file: index.vue:17 ~ nextTick ~ data', data)
  })
})

// const { data } = await useAsyncData('count', promiseFunc)
// console.log('data', data)
</script>

<template>
  <page-container :title="title">
    <h2>μ¬κΈ°λ {{ title }}μλλ€.</h2>
    <div>{{ $hello('world') }}</div>
  </page-container>
</template>

<style scoped></style>
