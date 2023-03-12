<script setup lang="ts">
import type { Toast } from '~~/types/toast'
const props = defineProps<{
  item: Toast
}>()
</script>

<template>
  <li
    class="pointer-events-auto bg-[#666] inline-flex px-4 py-1 rounded-xl shadow-md text-white my-1"
  >
    {{ props.item.message }}
  </li>
</template>

<style scoped></style>
