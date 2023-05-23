interface State {
  userInfo: {
    id: string
  } | null
}

export const useAuthStore = defineStore({
  id: 'auth-store',
  state: (): State => {
    return {
      userInfo: null,
    }
  },
  getters: {
    isLogged: (state: State) => !!state.userInfo,
  },
  actions: {
    login(userId: string) {
      return new Promise((resolve) => {
        setTimeout(() => {
          this.userInfo = {
            id: userId,
          }
          resolve('ok')
        }, 1000)
      })
    },
  },
})
