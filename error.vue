<script setup lang="ts">
// import { Error } from './types/error'
const props = defineProps<{
  error: Object
}>()

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="relative font-sans" n="green6">
    <div class="container max-w-200 mx-auto py-10 px-4">
      <h1>{{ error.statusCode }} - {{ error.message }}</h1>
      <div>{{ error.stack }}</div>
      There was an error 😱

      <br />
      <button @click="handleError">Clear error</button>
      <br />
      <NuxtLink to="/404"> Trigger another error </NuxtLink>
      <br />
      <NuxtLink to="/"> Navigate home </NuxtLink>
    </div>
  </div>
</template>
