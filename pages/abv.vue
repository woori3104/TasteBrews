<script setup lang="ts">
import { defineStore } from "pinia";
import Logo from "../components/Logo.vue";
import MainTitle from "../components/TypoComponent.vue";
import { ref } from "vue";
import axios from "axios";
import ButtonComponent from "../components/ButtonComponent.vue";

const startFind = () => {};
</script>

<template>
  <div id="app">
    <Logo />
    <MainTitle />
    <div class="btn-container">
      <button class="btn-start">Start</button>
    </div>
  </div>
</template>

<style>
.btn-container {
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
}
.btn-start {
  border-radius: 5%;
  width: 200px;
  height: 60px;
  font-size: 20px;
  background-color: #a5c4cc;
  color: #4d769e;
  font-family: "UhBeeMiMi";
}
/*스타일링. */
</style>
