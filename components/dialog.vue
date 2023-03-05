<script setup lang="ts">
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { useDialogStore } from '~/store/dialog'
const dialogStore = useDialogStore()
// const props = defineProps<>()
const closeModal = () => {
  dialogStore.removeDialog()
}
</script>

<template>
  <TransitionRoot appear :show="true" as="template">
    <Dialog as="div" class="relative z-10" @close="closeModal">
      <!-- dialog 배경 -->
      <TransitionChild
        v-if="false"
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/30" aria-hidden="true" />
      </TransitionChild>
      <!-- dialog -->
      <div class="fixed inset-0 overflow-y-auto" @click.self="closeModal">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
                Payment successful
              </DialogTitle>
              <div class="mt-2">
                <p class="text-sm text-gray-500">
                  Your payment has been successfully submitted. We’ve sent you an email with all of
                  the details of your order.
                </p>
              </div>

              <div class="mt-4">
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  @click="closeModal"
                >
                  Got it, thanks!
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
  <!-- <Transition mode="in-out">
    <div class="dialog-container" @click.self="dialogStore.clearDialog"></div>
  </Transition>
  <Transition mode="in-out">
    <div class="dialog">
      <p>{{ activedDialog.title }}</p>
    </div>
  </Transition> -->
</template>

<style scoped>
.dialog-container {
  @apply w-screen h-screen fixed z-20 bg-[rgba(0,0,0,0.5)];
}
.dialog {
  @apply min-w-[500px] min-h-[300px] max-w-[90%] fixed z-30 inset-auto bg-white border z-10 rounded-lg;
}
</style>
