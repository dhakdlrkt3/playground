<template>
  <div id="header">
    <slot name="header">
      <div class="header-container">
        {{ title }}
      </div>
    </slot>
  </div>

  <div id="contents">
    <div class="contents-container">
      <slot />
    </div>
  </div>

  <div id="footer">
    <slot name="footer">
      <div class="footer-container">
        asdf
      </div>
    </slot>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    default: '',
  },
})
</script>