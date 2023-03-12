<script setup lang="ts">
import nuxtConfig from '~~/nuxt.config'

const title = '홈'
useHead({
  title,
})
const count = ref(1)

const { $UI } = useNuxtApp()

interface ResponseData {
  name: string
  age: number
}
const dataRef = ref<ResponseData>({ name: '', age: 0 })
const errorMsg = ref<string>('')
const isLoading = ref<any>(false)

const testFunc = async () => {
  const { data, pending, error } = await useFetch('/api/outer', {
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
    // return
  }
  // if (data && data.value !== null) dataRef.value = data.value
}

// const { data } = await useAsyncData('count', promiseFunc)
// console.log('data', data)
const createToast = () => {
  $UI.toast(`안녕${count.value}`)
  count.value++
}
</script>

<template>
  <page-container :title="title">
    <h2>여기는 {{ title }}입니다.</h2>
    <button type="button" @click="testFunc">API 요청</button>
    <div class="p-5">
      {{ dataRef }}
    </div>
    <hr />
    <div>error: {{ errorMsg }}</div>
    <hr />
    <div>loading: {{ isLoading }}</div>
    <button type="button" @click="createToast">toast 생성</button>
  </page-container>
</template>

<style scoped></style>
