<script setup lang="ts">
import { useDialogStore } from '~/store/dialog'
const dialogStore = useDialogStore()
useHead({
  title: '기본',
})
</script>

<template>
  <div class="w-full flex flex-row mx-auto">
    <AppGnb />
    <div class="w-full flex flex-col justify-start">
      <AppHeader />
      <main class="p-5">
        <NuxtLoadingIndicator
          :height="5"
          color="repeating-linear-gradient(to right,#ff0000 0%,#882200 50%,#771122 100%)"
          :throttle="200"
          :duration="2000"
        />
        <NuxtPage />
      </main>
      <AppFooter />
    </div>
  </div>
  <Teleport to="body">
    <Dialog v-if="dialogStore.hasDialog" />
  </Teleport>
</template>
