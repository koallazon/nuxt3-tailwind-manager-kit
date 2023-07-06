<script setup lang="ts">
import { useAuthStore } from '~/store/auth'
const authStore = useAuthStore()
definePageMeta({
  title: 'login',
  layout: 'anonymous',
})

const userId = ref('')
const password = ref('')
const sumbit = () => {
  console.log('submit', userId.value, password.value)
  authStore.login(userId.value).then((msg) => {
    console.log('🚀 ~ file: login.vue:12 ~ authStore.login ~ msg:', msg)
    navigate('/dashboard')
  })
}
</script>

<template>
  <div>
    <h2>로그인</h2>
    로그인을 합니다. 처음
    <form @submit.prevent="sumbit">
      <div>
        <input v-model="userId" type="text" placeholder="아이디" />
      </div>
      <div>
        <input v-model="password" type="password" placeholder="비밀번호" />
      </div>
      <button>로그인</button>
    </form>
  </div>
</template>

<style scoped>
input {
  color: #000;
}
</style>
