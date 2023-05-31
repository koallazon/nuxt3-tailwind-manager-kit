<script setup lang="ts">
import type { Toast } from '~~/types/toast'

const props = withDefaults(defineProps<Toast>(), {
  draggable: true,
})

const setDrag = () => {
  const el: HTMLElement | null = document.getElementById(props.item.id)
  if (!el) return
  useEventListener(el, 'dragstart', (evt: DragEvent) => {
    console.log('dragstart', evt)

    evt.target?.classList.add('toast-drag')
    // evt.dataTransfer.dropEffect = 'move'
    // evt.dataTransfer.effectAllowed = 'move'
    // evt.dataTransfer.setData('text/plain', 'This text may be dragged')
  })
  useEventListener(el, 'dragover', (evt) => {
    // console.log('dragover', evt)
    // evt.preventDefault()
  })
  useEventListener(el, 'dragend', (evt) => {
    console.log('dragstart', evt)
    evt.target?.classList.remove('toast-drag')
  })
}
onMounted(() => {
  nextTick(() => {
    setDrag()
  })
})
</script>

<template>
  <li
    :id="props.id"
    :draggable="props.draggable"
    class="translate-y-6 pointer-events-auto bg-[#666] inline-flex px-4 py-1 rounded-xl shadow-md text-white my-1"
  >
    {{ props.message }}
  </li>
</template>

<style scoped>
.toast-drag {
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  /* opacity: 0; */
}
</style>
