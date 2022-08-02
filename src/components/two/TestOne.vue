<template>
  <div class="container">
    <img
      v-for="num in idxs"
      :key="num"
      :src="`/assets/photo-14027${num}.jpeg`"
      loading="lazy"
      alt="iamge-1"
    >
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
// Testname = 1. 같은 파일을 외부에서 가져오는 것과 같은 서버에 있는 것 차이 비교해보기
// Testname = 2. 네이티브 로딩 테스트해보기
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