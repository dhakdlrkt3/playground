<template>
  <transition name="fade">
    <div
      v-if="showHeader"
      class="container"
    >
      <div class="leader">
        <router-link to="/">
          <img
            class="logo"
            src="/logo.png"
            alt="logo"
          >
        </router-link>

        <h2 class="title">
          Page: {{ route.name }}
        </h2>
      </div>

      <nav>
        <ul>
          <li
            v-for="rt in routes"
            :key=" rt.path"
          >
            <router-link :to="rt.path">
              {{ rt.name }}
              <span :class="rt.visit ? 'visit' : ''">
              </span>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </transition>
</template>
  
<script setup lang='ts'>
import { reactive, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const routes = reactive([
  {
    path: '/one',
    name: 'ONE',
    visit: route.path === '/one',
  },
  {
    path: '/two',
    name: 'TWO',
    visit: route.path === '/two',
  },
])

const showHeader = ref(true)

</script>
  
<style scoped lang="scss">
.container {
  position: fixed;
  z-index: 100;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: silver;
  max-width: 1440px;
  width: 100%;
  height: 75px;
  padding: 10px 35px;

  .logo {
    display: inline-block;
    width: 60px;
    height: 60px;
    margin-right: 100px;
  }

  .title {
    transform: translateY(-25px);
    display: inline-block;
  }

  li {
    position: relative;
    display: inline-block;
    width: 100px;
    margin: 0 10px;

    a {
      color: $palette-24;
      text-decoration: none;

      .visit {
        position: absolute;
        left: 20px;
        bottom: calc(50% - 1.5px);
        width: 5px;
        height: 5px;
        background-color: $palette-24;
        border-radius: 100%;
      }
    }
  }
}
</style>