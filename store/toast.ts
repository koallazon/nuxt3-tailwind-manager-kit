import type { State, Toast } from '~/types/toast'

export const useToastStore = defineStore({
  id: 'toast-store',
  state: (): State => {
    return {
      toasts: [],
    }
  },
  getters: {
    hasToast: (state: State) => !!state.toasts.length,
    activedToast: (state: State) => state.toasts[state.toasts.length - 1],
  },
  actions: {
    addToast(toast: Toast) {
      this.toasts.push(toast)
      setTimeout(() => {
        this.removeToast(toast.id)
      }, 3000)
    },
    removeToast(id: string | undefined) {
      if (!this.hasToast) return
      if (id) {
        const finded = this.toasts.findIndex((item: Toast) => item.id === id)
        if (finded > -1) this.toasts.splice(finded, 1)
      } else {
        const latest = this.toasts.pop()
        if (latest && latest.resolve) latest.resolve(false)
      }
    },
    clearToast() {
      this.toasts.splice(0, this.toasts.length)
    },
  },
})
