<script setup lang="ts">
import { defineStore } from 'pinia';
import Logo from '../components/Logo.vue';
import MainTitle from '../components/TypoComponent.vue';
import { ref } from 'vue';
import axios from 'axios';
import ButtonComponent from '../components/ButtonComponent.vue';
import { useEbcGtStore, useEbcLtStore } from '../stores/store';

const router = useRouter();

const navigateToResult = (ebcGt?: number, ebcLt?: number) => {
  const ebcGtStore = useEbcGtStore();
  const ebcLtStore = useEbcLtStore();
  ebcGtStore.$state.ebcGt = ebcGt;
  ebcLtStore.$state.ebcLt = ebcLt;
  router.push('/result');
};
</script>

<template>
  <div id="app">
    <Logo />
    <MainTitle
      typoClass="mainTitle"
      typoChildren="선호하는 맥주 색상을 알려줘"
    />
    <div class="btn-container">
      <ButtonComponent
        btnClass="btn-start"
        :onClick="() => navigateToResult(0, 20)"
        btnName="투명하고 밝은색"
      />
    </div>
    <div class="btn-container">
      <ButtonComponent
        btnClass="btn-start"
        :onClick="() => navigateToResult(20, 40)"
        btnName="가을 노을같은 색"
      />
    </div>
    <div class="btn-container">
      <ButtonComponent
        btnClass="btn-start"
        :onClick="() => navigateToResult(40, undefined)"
        btnName="초콜릿같은색"
      />
    </div>
    <div class="btn-container">
      <ButtonComponent
        btnClass="btn-start"
        :onClick="() => navigateToResult()"
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
