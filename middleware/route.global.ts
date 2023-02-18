import type { NuxtApp } from '#app'

export default defineNuxtRouteMiddleware((to, from) => {
  // isAuthenticated() is an example method verifying if a user is authenticated
  const nuxtApp: NuxtApp = useNuxtApp()
  const auth = useCookie<{ access: string; refresh: string }>('auth')
  auth.value = { access: 'ACCESS-TOKEN', refresh: 'REFRESH-TOKEN' }
  console.log('route middleware', to.path)
})
