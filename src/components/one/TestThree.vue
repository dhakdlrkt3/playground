<template>
  <div class="container">
    <div>
      <font-awesome-icon icon="fa-solid fa-star" />
      <font-awesome-icon icon="fa-regular fa-star" />
    </div>
    <div class="tab-bar">
      <div
        v-for="tab, i in tabs"
        :key="i" 
        class="tab ion-activatable"
        :class="selTab === i ? 'selected' : ''"
        @click="onClickTab(i)"
      >
        <div class="icon-text">
          <!-- <ion-icon
            class="icon"
            :name="tab.icon"
          /> -->

          <transition name="tab-slide">
            <span
              v-if="selTab === i"
              class="label"
            >
              {{ tab.label }}
            </span>
          </transition>
        </div>
        <!-- <ion-ripple-effect /> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const tabs = [
  { icon: 'home-outline', label: 'Home' },
  { icon: 'chatbubble-ellipses-outline', label: 'Chat' },
  { icon: 'notifications-outline', label: 'Noti' },
  { icon: 'person-circle-outline', label: 'My' },
]

const selTab = ref(0)

function onClickTab (idx: number) {
  selTab.value = idx
}

</script>

<style scoped lang="scss">
.tab-bar {
  width: 100%;
  height: 100px;
  display: flex;

  .tab {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100%;
    color: #333;
    overflow: hidden;

    .icon-text {
      .icon {
        width: 30px;
        height: 30px;
        margin-right: 5px;
      }

      .label {
        position: relative;
        bottom: 3px;
        display: inline-block;
        overflow: hidden;
        white-space: nowrap;
        width: 50px;
      }
    }

    &.selected {
      color: #3880ff;
    }

    &:hover {
      cursor: pointer;
    }
  }
}

.tab-slide-enter-active,
.tab-slide-leave-active {
  transition: width 0.7s ease;
}

.tab-slide-enter-from,
.tab-slide-leave-to {
  width: 0px !important;
}
</style>