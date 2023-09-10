<script setup lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    btnName: {
      type: String,
      required: true
    },
    btnClass: {
      type: String,
      default: ''
    },
    onClick: {
      type: Function,
      required: false
    }
  },
});
</script>
</script>

<template>
  <button :class="btnClass" @click="onClick">{{ btnName }}</button>
</template>
