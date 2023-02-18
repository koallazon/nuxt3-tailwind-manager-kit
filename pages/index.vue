<script setup lang="ts">
import { isEmpty } from 'lodash-es'
const title = '홈'
useHead({
  title,
})
// const promiseFunc = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('ok')
//     }, 5000)
//   })
// }

// onMounted(() => {
//   nextTick(async () => {
//     const data = await promiseFunc()
//     console.log('🚀 ~ file: index.vue:17 ~ nextTick ~ data', data)
//   })
// })

interface ResponseData {
  name: string
  age: number
}
const dataRef = ref<ResponseData>({ name: '', age: 0 })

const testFunc = async () => {
  const { data, pending, error } = await useFetch<ResponseData>(
    'http://localhost:3000/user?name=ltg'
  )
  if (error) {
    console.log('🚀 ~ file: index.vue:28 ~ testFunc ~ error', error.value)
    return
  }
  if (pending) console.log('🚀 ~ loading....')
  if (data && data.value !== null) dataRef.value = data.value
}

// const { data } = await useAsyncData('count', promiseFunc)
// console.log('data', data)
</script>

<template>
  <page-container :title="title">
    <h2>여기는 {{ title }}입니다.</h2>
    <div>{{ $hello('world') }}</div>
    <button type="button" @click="testFunc">API 요청</button>
    <div class="p-5">
      {{ dataRef }}
    </div>
  </page-container>
</template>

<style scoped></style>
