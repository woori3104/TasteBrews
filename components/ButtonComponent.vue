<script setup lang="ts">

const props = defineProps({
  btnName: {
    type: String,
    required: true,
  },
  btnClass: {
    type: String,
    default: '',
  },
  onClick: {
    type: Function,
    required: false,
  },
});

const handleClick = () => {
  props.onClick?.();
}

</script>

<template>
  <button :class="btnClass" @click="handleClick">{{ btnName }}</button>
</template>

<style>


</style>