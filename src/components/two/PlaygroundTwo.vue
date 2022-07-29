<template>
  <div class="container">
    <div class="wrapper screen1">
      screen1
    </div>
    <div class="trigger"></div> 

    <div class="wrapper screen2">
      screen2
    </div>
    <div class="wrapper screen3">
      screen3
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { scrollTop } from '@/utils'

// 3300 ~ 6000
watch(() => scrollTop.value, (globalScrollTop: number) => {
  console.log('top => ', globalScrollTop)

})

</script>

<style scoped lang="scss">
.wrapper {
  width: 100%;
  height: 100vh;
  line-height: 100vh;
  text-align: center;
}

.trigger {
  width: 100%;
  height: 10px;
  margin-bottom: 900px;
}

.screen1 {
  position: sticky;
  top: 0;

  // top: 45vh;
  background-color: rgb(235 147 147);
}

.screen2 {
  background-color: rgb(185 245 177);
}

.screen3 {
  background-color: rgb(160 229 238 / 62.3%);
}

</style>