<script setup lang="ts">
import logo from "../components/Logo.vue";
import mainTitle from "../components/MainTitle.vue";
import { ref } from "vue";
import axios from "axios";
const location = ref<{ latitude: number; longitude: number } | null>(null);
const country = ref<string>("");

const getBreweriesInCurrentLocation = async () => {
  try {
    const response = await axios.get(
      `https://api.openbrewerydb.org/breweries?by_country=${country.value}`
    );
    const data = response.data;
    country.value = "";
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
  <div id="app">
    <logo />
    <mainTitle />
    <div class="body" />
  </div>
</template>

<style>
/*스타일링. */
</style>
