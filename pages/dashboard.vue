<script setup lang="ts">
import { useDialogStore } from '~/store/dialog'
const dialogStore = useDialogStore()
const title = '대시보드'
useHead({
  title,
})
const showDialog = () => {
  dialogStore.addDialog({
    title: '하하하',
  })
}
</script>

<template>
  <page-container :title="title">
    <h2>여기는 {{ title }}입니다.</h2>
    <button type="button" @click="showDialog">dialog 보기</button>
  </page-container>
</template>
