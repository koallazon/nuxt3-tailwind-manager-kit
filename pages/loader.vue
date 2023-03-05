<script setup lang="ts">
const data = ref('')
const delay = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('ok')
    }, 5000)
  })
}
try {
  const result = await delay()
  if (typeof result === 'string') data.value = result
} catch (err) {
  console.log(err)
}
</script>

<template>
  <h1>data: {{ data }}</h1>
</template>

<style scoped></style>
