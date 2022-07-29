<template>
  <div id="header">
    <div class="header-container">
      <slot name="header">
        <header-view />
      </slot>
    </div>
  </div>

  <div id="contents">
    <div class="contents-container">
      <slot />
    </div>
  </div>

  <footer-view />
</template>

<script setup lang="ts">
import { defineProps, onBeforeUnmount, onMounted } from 'vue'
import HeaderView from '@/components/core/HeaderView.vue' 
import FooterView from '@/components/core/FooterView.vue' 
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

<style scoped lang="scss">
#contents {
  min-height: calc(100vh - 75px - 300px);
}

</style>