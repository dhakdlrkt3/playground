<template>
  <div
    v-background-color="bgColor"
    class="container"
  >
    <button
      class="change-button"
      @click="onClickChange"
    >
      change bgColor
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const bgColor = ref('blue')

function onClickChange () {
  bgColor.value = bgColor.value === 'red' ? 'blue' : 'red'
}
</script>

<style scoped lang="scss">
.container {
  position: relative;
  height: 500px;
  background-color: silver;
  text-align: center;

  .change-button {
    position: absolute;
    width: 200px;
    height: 50px;
    border-radius: 20px;
    transform: translate(-100px, 250px);
    background-color: aqua;
  }
}

</style>