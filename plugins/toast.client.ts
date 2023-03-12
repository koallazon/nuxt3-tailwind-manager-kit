import { uniqueId } from 'lodash-es'
import { useToastStore } from '~/store/toast'
import type { ToastOptions } from '~/types/toast'
export default defineNuxtPlugin(() => {
  const toastStore = useToastStore()
  return {
    provide: {
      UI: {
        toast: (message: string, options: ToastOptions = {}) => {
          return new Promise((resolve) => {
            toastStore.addToast({
              id: uniqueId('toast'),
              resolve,
              message,
              ...options,
            })
          })
        },
      },
    },
  }
})
