<template>
  <div class="container">
    <img
      v-for="num in idxs"
      :key="num"
      :src="`/assets/photo-14027${num}.jpeg`"
      loading="lazy"
      alt="iamge-1"
    >
    <!-- url로 가져오기 -->
    <!-- <img
      v-for="num in idxs"
      :key="num"
      :src="`https://images.pexels.com/photos/14027${num}/pexels-photo-14027${num}.jpeg`"
      loading="lazy"
      alt="iamge-1"
    > -->
  </div>
</template>

<script setup lang="ts">
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