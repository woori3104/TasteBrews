<script setup lang="ts">
import { defineStore } from 'pinia';
import Logo from '../components/Logo.vue';
import MainTitle from '../components/TypoComponent.vue';
import { ref } from 'vue';
import axios from 'axios';
import ButtonComponent from '../components/ButtonComponent.vue';
import { useIbuGtStore, useIbuLtStore } from '../stores/store';

const router = useRouter();

const navigateTEebc = (ibuGt?: number, ibuLt?: number) => {
  const ibuGtStore = useIbuGtStore();
  const ibuLtStore = useIbuLtStore();
  ibuGtStore.$state.ibuGt = ibuGt;
  ibuLtStore.$state.ibuLt = ibuLt;

  router.push('/ebc');
};
</script>

<template>
  <div id="app">
    <Logo />
    <MainTitle
      typoClass="mainTitle"
      typoChildren="다음 중 어떤 맥주를 선호하시나요?"
    />
    <div class="btn-container">
      <ButtonComponent
        btnClass="btn-start"
        :onClick="() => navigateTEebc(0, 20)"
        btnName="부드러운 쓴맛 (파일스너, 위트비어)"
      />
    </div>
    <div class="btn-container">
      <ButtonComponent
        btnClass="btn-start"
        :onClick="() => navigateTEebc(20, 40)"
        btnName="중간 쓴맛 (에일)"
      />
    </div>
    <div class="btn-container">
      <ButtonComponent
        btnClass="btn-start"
        :onClick="() => navigateTEebc(40, 60)"
        btnName="강한쓴맛 (IPA)"
      />
    </div>
    <div class="btn-container">
      <ButtonComponent
        btnClass="btn-start"
        :onClick="() => navigateTEebc(60, undefined)"
        btnName="아주강한 쓴맛 (더블IPA)"
      />
    </div>
    <div class="btn-container">
      <ButtonComponent
        btnClass="btn-start"
        :onClick="() => navigateTEebc()"
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
