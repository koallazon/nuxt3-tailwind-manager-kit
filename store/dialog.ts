import type { Dialog, State } from '~/types/dialog'

export const useDialogStore = defineStore({
  id: 'dialog-store',
  state: (): State => {
    return {
      dialogs: [],
    }
  },
  getters: {
    hasDialog: (state: State) => !!state.dialogs.length,
    activedDialog: (state: State) => state.dialogs[0],
  },
  actions: {
    addDialog(dialog: Dialog) {
      this.dialogs.push(dialog)
    },
    removeDialog() {
      this.dialogs.shift()
    },
    clearDialog() {
      this.dialogs.length = 0
    },
  },
})
