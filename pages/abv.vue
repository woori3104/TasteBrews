<script setup lang="ts">
import { defineStore } from 'pinia';
import Logo from '../components/Logo.vue';
import MainTitle from '../components/TypoComponent.vue';
import { ref } from 'vue';
import axios from 'axios';
import ButtonComponent from '../components/ButtonComponent.vue';
import { useAbvGtStore, useAbvLtStore } from '../stores/store';

const router = useRouter();

const navigateToIbu = (abvGt?: number, abvLt?: number) => {
  const abvGtStore = useAbvGtStore();
  const abvLtStore = useAbvLtStore();

  abvGtStore.$state.abvGt = abvGt;
  abvLtStore.$state.abvLt = abvLt;
  router.push('/ibu');
};
</script>

<template>
  <div id="app">
    <Logo />
    <MainTitle
      typoClass="mainTitle"
      typoChildren="선호하는 알콜도수를 알려줘"
    />
    <div class="btn-container">
      <ButtonComponent
        btnClass="btn-start"
        :onClick="() => navigateToIbu(0, 3.5)"
        btnName="가볍게 즐기는게 좋아요"
      />
    </div>
    <div class="btn-container">
      <ButtonComponent
        btnClass="btn-start"
        :onClick="() => navigateToIbu(3.5, 6)"
        btnName="그래도 조금은 취하고싶어"
      />
    </div>
    <div class="btn-container">
      <ButtonComponent
        btnClass="btn-start"
        :onClick="() => navigateToIbu(6, undefined)"
        btnName="아 그냥 달려!! "
      />
    </div>
    <div class="btn-container">
      <ButtonComponent
        btnClass="btn-start"
        :onClick="() => navigateToIbu()"
        btnName="상관없어"
      />
    </div>
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
/*스타일링. */
</style>
