<template>
  <div class="container">
    <div class="banner">
      모든 국민은 학문과 예술의 자유를 가진다. 헌법재판소 재판관은 탄핵 또는 금고 이상의 형의 선고에 의하지 아니하고는 파면되지 아니한다. 사면·감형 및 복권에 관한 사항은 법률로 정한다. 국가안전보장에 관련되는 대외정책·군사정책과 국내정책의 수립에 관하여 국무회의의 심의에 앞서 대통령의 자문에 응하기 위하여 국가안전보장회의를 둔다.

      비상계엄이 선포된 때에는 법률이 정하는 바에 의하여 영장제도, 언론·출판·집회·결사의 자유, 정부나 법원의 권한에 관하여 특별한 조치를 할 수 있다. 국회는 국민의 보통·평등·직접·비밀선거에 의하여 선출된 국회의원으로 구성한다. 대통령이 임시회의 집회를 요구할 때에는 기간과 집회요구의 이유를 명시하여야 한다.
      
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
// Testname = 애니메이션 테스트
console.time('one')
// let sum = 0
// for (let i = 0; i < 1e3; i++) {
//   console.log(i)
//   sum += i
// }
// console.log('결과: sum =>', sum)
console.timeEnd('one')

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
.banner {
  position: relative;
  height: 400px;
  line-height: 1.2;
  text-align: center;
  background-color: grey;
  font-size: #{to-rem(30)};
  padding: 20px;
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