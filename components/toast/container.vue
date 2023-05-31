<script setup lang="ts">
import { TransitionRoot } from '@headlessui/vue'
import { useToastStore } from '~/store/toast'
const toastStore = useToastStore()
</script>

<template>
  <div class="w-full fixed inset-y-0 pointer-events-none overflow-hidden p-2 z-[1000]">
    <ul class="h-full flex flex-col items-center justify-end">
      <template v-for="toast in toastStore.toasts" :key="toast.id">
        <TransitionRoot
          :show="true"
          appear
          enter="duration-[750ms] ease"
          enter-from="translate-y-3"
          enter-to="translate-y-0"
          leave="duration-300 ease-in-out"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <ToastItem v-bind="toast" />
        </TransitionRoot>
      </template>
    </ul>
  </div>
</template>

<style scoped></style>
