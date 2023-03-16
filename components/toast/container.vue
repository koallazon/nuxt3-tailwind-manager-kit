<script setup lang="ts">
import { TransitionRoot } from '@headlessui/vue'
import { useToastStore } from '~/store/toast'
const toastStore = useToastStore()
</script>

<template>
  <div class="w-full fixed inset-y-0 pointer-events-none overflow-hidden p-2 z-[1000]">
    <ul class="h-full flex flex-col items-center justify-end">
      <temlate v-for="(toast, i) in toastStore.toasts" :key="i">
        <TransitionRoot
          :show="true"
          appear
          enter="duration-300 ease"
          enter-from="translate-y-3"
          enter-to="translate-y-0"
          leave="duration-300 ease-in-out"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <ToastItem :item="toast" />
        </TransitionRoot>
      </temlate>
    </ul>
  </div>
</template>

<style scoped></style>
