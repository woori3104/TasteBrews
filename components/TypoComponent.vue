<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    typoChildren: {
      type: String,
      required: true,
    },
    typoClass: {
      type: String,
      default: "",
    },
  },
});
</script>
<template>
  <div :class="typoClass">{{ typoChildren }}</div>
</template>

<style>

</style>
