<template>
  <div id="header">
    <slot name="header">
      <div class="header-container">
        {{ title }}
      </div>
    </slot>
  </div>

  <div
    id="contents"
    ref="contents"
  >
    <div class="contents-container">
      <slot />
    </div>
  </div>


  <div
    v-if="$slots.footer"
    id="footer"
  >
    <slot name="footer">
      <div class="footer-container">
      </div>
    </slot>
  </div>
</template>

<script setup lang="ts">
import { defineProps, onBeforeUnmount, onMounted } from 'vue'
import { scrollTop } from '@/utils'

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  scroll: {
    type: Boolean,
    default: false,
  },
})

function onScroll () {
  scrollTop.value = document.documentElement.scrollTop
  console.log('scrollTop => ', scrollTop.value)
}

onMounted(() => {
  if (props.scroll) {
    document.addEventListener('scroll', onScroll)
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  console.log('removed')
})

</script>