<template>
  <div class="container">
    <img
      v-for="num in idxs"
      :key="num"
      v-lazy="`https://images.pexels.com/photos/14027${num}/pexels-photo-14027${num}.jpeg`"
    >
  </div>
</template>

<script setup lang="ts">
// Testname = vue-lazy-load 사용해보기
const idxs = [86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96]
</script>

<style scoped lang="scss">
img {
  display: block;
  width: 100%;
  height: 100vh;
  margin-bottom: 30px;
}
</style>