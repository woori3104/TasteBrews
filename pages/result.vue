<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import {
  useEbcGtStore,
  useEbcLtStore,
  useAbvGtStore,
  useAbvLtStore,
  useIbuGtStore,
  useIbuLtStore,
} from '../stores/store';

const beers = ref([]);

const fetchBeers = async () => {
  const ebcGtStore = useEbcGtStore();
  const ebcLtStore = useEbcLtStore();
  const abvGtStore = useAbvGtStore();
  const abvLtStore = useAbvLtStore();
  const ibuGtStore = useIbuGtStore();
  const ibuLtStore = useIbuLtStore();

  try {
    const response = await axios.get('https://api.punkapi.com/v2/beers', {
      params: {
        abv_gt: abvGtStore.$state.abvGt,
        abv_lt: abvLtStore.$state.abvLt,
        ibu_gt: ibuGtStore.$state.ibuGt,
        ibu_lt: ibuLtStore.$state.ibuLt,
        ebc_gt: ebcGtStore.$state.ebcGt,
        ebc_lt: ebcLtStore.$state.ebcLt,
      },
    });
    beers.value = response.data;
  } catch (error) {
    console.error('Error fetching beers:', error);
  }
};

// When component is mounted, fetch beers
onMounted(fetchBeers);
</script>

<template>
  <div id="app">
    <Logo />
    <MainTitle typoClass="mainTitle" typoChildren="Recommended Beers" />
    <div class="grid" v-if="beers.length">
      <div v-for="beer in beers" :key="beer.id" class="grid-item">
        <img class="beerImage" :src="beer.image_url" alt="Beer Image" />
        <h3>{{ beer.name }}</h3>
      </div>
    </div>

    <p v-else>No beers found based on your preferences.</p>
  </div>
</template>

<style>
.btn-container {
  padding: 30px;
  display: flex;
  direction: column;
  justify-content: center;
  align-items: center;
  height: 50px;
}
.btn-start {
  border-radius: 5%;
  width: 230px;
  height: 60px;
  font-size: 20px;
  background-color: #a5c4cc;
  color: #4d769e;
  font-family: 'UhBeeMiMi';
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 30px; /* 격자 사이의 간격 설정 */
}

.grid-item {
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  transition: transform 0.3s;
}

.grid-item h3 {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  text-align: center;
  padding: 5px 0;
  margin: 0;
}
.beerImage {
  width: 200px;
}
</style>
