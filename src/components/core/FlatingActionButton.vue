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
  console.log('clicked!')
}
</script>
  
<style lang="scss" scoped>
  .container {
    position: fixed;
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