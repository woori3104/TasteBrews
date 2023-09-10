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
.mainTitle {
  font-family: "UhBeeMiMi";
  display: flex;
  justify-content: center;
  align-items: center;
  color: #4d769e;

  font-weight: 800;
  font-size: 28px;
}
</style>
