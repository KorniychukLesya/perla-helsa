<template>
  <header-my :countProducts="countCard" />
  <RouterView @addInCard="addInCard" />
</template>

<script setup>
  import { RouterView } from "vue-router";
  import HeaderMy from "../src/components/HeaderMy.vue";
  import "./assets/scss/_fonts.scss";
  import { ref } from "vue";
  
  let countCard = ref(0);
  
  const addInCard = (countProducts) => {
    countCard.value = countProducts;
  };
  
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Piazzolla:ital,opsz,wght@1,8..30,500&display=swap");

#app {  
  height: 100%;
  font-family: "Onest";
  color: #00284f;
  background: linear-gradient(
    180deg,
    rgba(200, 224, 149, 0.8) 0%,
    rgba(197, 226, 229, 0.512) 19.74%,
    rgba(221, 238, 239, 0.8) 39.06%,
    rgba(255, 255, 255, 0.8) 79.69%,
    rgba(255, 255, 255, 0.8) 100%
  );
}
</style>
