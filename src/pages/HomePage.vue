<template>
  <default-page>
    <nav>
      <router-link to="/one">
        Playground One 이동
      </router-link>
      <router-link to="/two">
        Playground two 이동
      </router-link>
    </nav>
  </default-page>
</template>
<script setup lang="ts">
import DefaultPage from '@/components/core/DefaultPage.vue' 

</script>
<style lang="scss">
nav {
  padding: 30px;

  a {
    display: block;
    font-weight: bold;
    color: #2c3e50;
    font-size: 3rem;
    margin-bottom: 20px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>