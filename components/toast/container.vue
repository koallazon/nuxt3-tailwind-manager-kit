<script setup lang="ts">
import { TransitionChild, TransitionRoot } from '@headlessui/vue'
import { useToastStore } from '~/store/toast'
const toastStore = useToastStore()
</script>

<template>
  <TransitionRoot appear :show="true" as="template">
    <div class="w-full fixed inset-y-0 pointer-events-none overflow-hidden p-2 z-[1000]">
      <TransitionChild
        class="h-full flex flex-col items-center justify-end"
        as="ul"
        enter="duration-300 ease-out"
        enter-from="translate-y-6"
        enter-to="translate-y-0"
        leave="duration-200 ease-in"
        leave-from="translate-y-0"
        leave-to="translate-y-6"
      >
        <ToastItem v-for="toast in toastStore.toasts" :key="toast.id" :item="toast" />
      </TransitionChild>
    </div>
  </TransitionRoot>
</template>

<style scoped></style>
