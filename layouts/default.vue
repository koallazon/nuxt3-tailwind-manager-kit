<script setup lang="ts">
useHead({
  title: '기본',
})

onMounted(() => {
  nextTick(() => {
    const el = ref<HTMLElement | null>(null)
    // const dragElement = document.getElementById('toast')

    // const { x, y, style } = useDraggable(el, {
    //   initialValue: { x: 40, y: 40 },
    // })
    // let xStart, xEnd
    // let opacityStart, opacityEnd
    // const distanceMax = 200

    // const dragMove = (dragMoveEvent: Event) => {
    //   dragMoveEvent.preventDefault()

    //   xEnd = dragMoveEvent.clientX
    //   console.log('🚀 ~ file: default.vue:17 ~ dragMove ~ xEnd:', xStart, xEnd)
    //   let distance = Math.abs(xEnd - xStart)
    //   if (distance > distanceMax) distance = distanceMax
    //   const opacity = 1 - distance / distanceMax
    //   // dragElement.style.left = `${distance}px`
    //   dragElement.style.opacity = opacityStart * opacity
    // }

    // const dragEnd = (dragEndEvent) => {
    //   dragEndEvent.preventDefault()
    //   document.removeEventListener('mousemove', dragMove)
    //   document.removeEventListener('mouseup', dragEnd)
    // }
    // useEventListener(dragElement, 'mousedown', (event: Event) => {
    //   event.preventDefault()

    //   xStart = event.clientX
    //   opacityStart = parseFloat(dragElement.style.opacity)

    //   useEventListener(dragElement, 'mousemove', dragMove)
    //   useEventListener(dragElement, 'mouseup', dragEnd)
    // })
  })
})
</script>

<template>
  <div class="w-full flex flex-row mx-auto">
    <AppGnb />
    <div class="w-full flex flex-col justify-start">
      <AppHeader />
      <main class="p-5">
        <NuxtPage />
      </main>
      <div id="toast" ref="el" style="opacity: 1">
        토스트
        Drag me! I am at {{ x }}, {{ y }}
      </div>
      <AppFooter />
    </div>
  </div>
</template>

<style scoped>
#toast {
  width: 200px;
  text-align: center;
  padding: 12px 20px;
  font-size: 1.2rem;
  position: fixed;
  bottom: 2rem;
  left: 50%;
  margin-left: -100px;
  background-color: #666;
  border-radius: 30px;
  opacity: 1;
}
</style>
