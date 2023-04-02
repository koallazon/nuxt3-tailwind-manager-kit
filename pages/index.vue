<script setup lang="ts">
import * as MyButton from 'lit-tailwind'

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
const myButtonEl = ref(null)

onMounted(() => {
  console.log('🚀 ~ file: index.vue:3 ~ MyButton:', MyButton)
  nextTick(async () => {
    const el = new MyButton.MyButton()
    myButtonEl.value.appendChild(el)
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
    <!-- <MyButton type="button" title="실험버튼입니다.">실험버튼</MyButton> -->
    <div ref="myButtonEl" type="button" title="실험버튼입니다.">실험버튼</div>
  </page-container>
</template>

<style scoped></style>
