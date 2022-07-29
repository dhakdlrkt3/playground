<template>
  <div class="container">
    <canvas
      ref="canvas"
      width="1158"
      height="770"
      class="hero-lightpass"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { scrollTop } from '@/utils'

const canvas = ref<HTMLCanvasElement | null>(null)
const context = ref<CanvasRenderingContext2D | null>(null)
const img = new Image()
const frameCount = 148

const currentFrame = (index: number) => 
  `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index.toString().padStart(4, '0')}.jpg`

const updateImage = (index: number) => {
  img.src = currentFrame(index)

  if (context.value) {
    context.value.drawImage(img, 0, 0)
  }
}

const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image()
    img.src = currentFrame(i)
  }
}

const renderFrame = (top: number) => {
  const scrollFraction = top / 3830 // 4520 - 770 + 80
  const frameIndex = Math.min(
    frameCount - 1,
    Math.floor(scrollFraction * frameCount + 1),
  )
  updateImage(frameIndex)
}

onMounted(() => {
  preloadImages()
  if (canvas.value) {
    context.value = canvas.value.getContext('2d')
    
    img.src = currentFrame(1)
    img.onload = function () {
      if (context.value) {
        context.value.drawImage(img, 0, 0)
      }
    }
  }
})

watch(() => scrollTop.value, (globalScrollTop: number) => {
  if (globalScrollTop > 6600) {
    renderFrame(globalScrollTop - 6601)
  }
})
</script>

<style scoped lang="scss">
.container {
  height: 500vh;
  background: #000;
}

.hero-lightpass {
  position: sticky;
  top: 80px;
  width: 100vw;
  height: 100vh;
}

</style>