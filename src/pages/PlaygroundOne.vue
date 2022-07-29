<template>
  <default-page scroll>
    <test-one />
    <test-two />
    <test-three />
    <test-four />
    <test-five />
    <template #fab>
      <flating-action-button />
    </template>
  </default-page>
</template>
  
<script setup lang='ts'>
import DefaultPage from '@/components/core/DefaultPage.vue' 
import FlatingActionButton from '@/components/core/FlatingActionButton.vue'
import TestOne from '@/components/one/TestOne.vue'
import TestTwo from '@/components/one/TestTwo.vue'
import TestThree from '@/components/one/TestThree.vue'
import TestFour from '@/components/one/TestFour.vue'
import TestFive from '@/components/one/TestFive.vue'
</script>