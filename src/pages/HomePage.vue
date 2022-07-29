<template>
  <default-page>
    <div class="container">
      <h2>
        뷰3 플레이그라운드 홈
      </h2>
    </div>
  </default-page>
</template>
<script setup lang="ts">
import DefaultPage from '@/components/core/DefaultPage.vue' 

</script>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 300px - 75px);

  h2 {
    font-size: #{to-rem(42)};
  }
}

</style>