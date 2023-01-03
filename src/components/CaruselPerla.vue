<template>
  <div
    id="carouselExampleControls"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          :src="require(`../assets/img/carusel/${firstPhoto}`)"
          class="d-block w-100"
          alt="omega"
        />
      </div>
      <div v-for="photo in otherPhotos" :key="photo" class="carousel-item">
        <img
          :src="require(`../assets/img/carusel/${photo}`)"
          class="d-block w-100"
          alt="omega"
        />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  productsPHotos: String,
});

let firstPhoto = "";
let otherPhotos = [];

const getFirstPhoto = () => {
  firstPhoto = props.productsPHotos[0];
};
getFirstPhoto();

const getOtherPhotos = () => {
  otherPhotos = props.productsPHotos.slice(1);
};
getOtherPhotos();
</script>

<style lang="scss">
  .carousel {
    position: relative;
    width: 100%;
  }
  
  .carousel .carousel-control-prev-icon {
    width: 12px;
    height: 17px;
    background-image: url(../assets/img/carusel/prew.svg);
  
    @include onDesktop {
      width: 22px;
      background-image: url(../assets/img/arrow-left.svg);
      position: absolute;
      top: 90%;
      left: 400px;
    }
  }
  
  .carousel .carousel-control-next-icon {
    width: 12px;
    height: 17px;
    background-image: url(../assets/img/carusel/next.svg);
  
    @include onDesktop {
      width: 22px;
      background-image: url(../assets/img/arrow-right.svg);
      position: absolute;
      top: 90%;
      left: 0;
    }
  }
  
  .carousel .carousel-item {
    padding: 0 15%;
  
    @include onTable {
      padding: 0 25%;
    }
    @include onDesktop {
      padding: 0;
    }
  }
</style>
