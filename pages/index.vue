<script setup lang="ts">
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
const errorMsg = ref<string>('')
const isLoading = ref<any>(false)

const testFunc = async () => {
  const { data, pending, error } = await useFetch<ResponseData>('/api/outer', {
    method: 'POST',
    body: {
      host: 'yookidz',
      domain: 'blog.yookidz.site',
      person: ['name'],
    },
  })
  console.log('pending', pending.value)
  isLoading.value = pending.value
  if (error.value) {
    console.log('🚀 ~ file: index.vue:28 ~ testFunc ~ error', error.value)
    errorMsg.value = error.value.statusMessage ?? ''
    return
  }
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
    <hr />
    <div>error: {{ errorMsg }}</div>
    <hr />
    <div>loading: {{ isLoading }}</div>
  </page-container>
</template>

<style scoped></style>
