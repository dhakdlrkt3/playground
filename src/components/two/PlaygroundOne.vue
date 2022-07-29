<template>
  <div class="container">
    <div class="dummy" />

    <div class="banner">
      banner
      <button
        class="play-button"
        @click="onTriggerAnimation"
      >
        play box 1
      </button>
    </div>

    <div class="wrapper box1">
      <transition name="slide-left">
        <div
          v-show="box1"
          class="box box1-1"
        >
          box1-1
        </div>
      </transition>

      <transition name="slide-right">
        <div
          v-show="box1"
          class="box box1-2"
        >
          box1-2
        </div>
      </transition>
    </div>

    <div class="wrapper box2">
      <transition name="fade">
        <div
          v-show="boxs[0]"
          class="box box2-1"
        >
          box2-1
        </div>
      </transition>

      <transition name="fade">
        <div
          v-show="boxs[1]"
          class="box box2-2"
        >
          box2-2
        </div>
      </transition>
    </div>

    <div class="wrapper box3">
      <transition name="fade">
        <div
          v-show="boxs[2]"
          class="box box3-1"
        >
          box3-1
        </div>
      </transition>

      <transition name="fade">
        <div
          v-show="boxs[3]"
          class="box box3-2"
        >
          box3-2
        </div>
      </transition>
    </div>

    <div class="wrapper box4">
      <transition name="fade">
        <div
          v-show="boxs[4]"
          class="box box4-1"
        >
          box4-1
        </div>
      </transition>

      <transition name="fade">
        <div
          v-show="boxs[5]"
          class="box box4-2"
        >
          box4-2
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { scrollTop } from '@/utils'
import { ref, watch } from 'vue'
// console.time('one')
// let sum = 0
// for (let i = 0; i < 1e3; i++) {
//   console.log(i)
//   sum += i
// }
// console.log('결과: sum =>', sum)
// console.timeEnd('one')

const box1 = ref(false)
const boxs = ref<boolean[]>(new Array(3 * 2).fill(false))

function playAnimation (top: number) {
  switch (true) {
    case top >= 800 && top < 1500: 
      boxs.value[0] = true
      boxs.value[1] = true
      break

    case top >= 1500 && top < 2200: 
      boxs.value[2] = true
      boxs.value[3] = true
      break

    case top >= 2200: 
      boxs.value[4] = true
      boxs.value[5] = true
      break
  }
}

function onTriggerAnimation () {
  box1.value = !box1.value
}

watch(() => scrollTop.value, (top: number) => {
  playAnimation(top)
})

</script>

<style scoped lang="scss">
.dummy {
  background-color: grey;
  height: 80px;
}

.banner {
  position: relative;
  width: 100%;
  height: 400px;
  line-height: 400px;
  text-align: center;
  background-color: grey;
  margin-bottom: 200px;

  .play-button {
    position: absolute;
    width: 200px;
    height: 50px;
    top: 45%;
    right: 40px;
    border-radius: 20px;
    background-color: aqua;
  }
}

.wrapper {
  display: flex;
  justify-content: space-between;
  min-height: 300px;
  margin-bottom: 300px;
  padding: 0 20px;
}

.box {
  width: 30vw;
  height: 400px;
  border-radius: 20px;
  line-height: 400px;
  text-align: center;
  background-color: grey;
  border: solid 1px rgb(80 78 78);
}

.box1 {
  &-1 {
    background-color: rgb(161 90 90);
  }

  &-2 {
    background-color: rgb(36 160 77);
  }
}

.box2 {
  &-1 {
    background-color: rgb(185 97 97);
  }

  &-2 {
    background-color: rgb(221 96 23);
  }
}

.box3 {
  &-1 {
    background-color: rgb(167 29 209);
  }

  &-2 {
    background-color: lemonchiffon;
  }
}

.box4 {
  &-1 {
    background-color: rgb(53 12 12);
  }

  &-2 {
    background-color: rgb(104 98 121);
  }
}

</style>