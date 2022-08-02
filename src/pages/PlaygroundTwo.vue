<template>
  <default-page scroll>
    <test-one />
    <test-two />
    <test-three />
  </default-page>
</template>
  
<script setup lang='ts'>
import DefaultPage from '@/components/core/DefaultPage.vue' 
import TestOne from '@/components/two/TestOne.vue'
import TestTwo from '@/components/two/TestTwo.vue'
import TestThree from '@/components/two/TestThree.vue'
</script>