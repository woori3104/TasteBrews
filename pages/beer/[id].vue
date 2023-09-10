<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
const beer = ref([]);
import { useRoute } from 'vue-router';

const route = useRoute();
const beerId = route.params.id;

const fetchBeer = async () => {
  console.log({ beerId });
  try {
    const response = await axios.get(
      `https://api.punkapi.com/v2/beers/${beerId}`
    );
    console.log({ response });
    beer.value = response.data[0];
  } catch (error) {
    console.error('Error fetching beer:', error);
  }
};

onMounted(fetchBeer);
</script>

<template>
  <div>
    <h2>{{ beer.name }}</h2>
    <img :src="beer.image_url" alt="Beer Image" />
    <p>{{ beer.description }}</p>
  </div>
</template>
