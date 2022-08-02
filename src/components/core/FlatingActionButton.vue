<template>
  <div
    class="container"
    @click="onFab"
  >
    Λ
  </div>
</template>
  
<script setup lang='ts'>
function onFab () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>
  
<style lang="scss" scoped>
  .container {
    position: fixed;
    bottom: 50px;
    right: calc(calc(calc(100vw - 1440px) / 2) + 50px);
    width: 80px;
    height: 80px;
    line-height: 80px;
    border-radius: 100%;
    border: solid 3px $palette-10;
    background-color: $palette-19;
    z-index: 100;

    &:hover {
      cursor: pointer;
    }
  }
</style>