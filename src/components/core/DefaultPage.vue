<template>
  <div id="app-screen">
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
      <div class="fab-container">
        <slot name="fab" />
      </div>
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
  fab: {
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
})

</script>

<style scoped lang="scss">
#app-screen {
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
}

#contents {
  min-height: calc(100vh - 75px - 300px);
  padding-top: 75px;
}

</style>