<template>
  <main class="omega">
    <div class="omega__conainer">
      <carusel-perla :productsPHotos="productsPHotos" />
      <div>
        <h1 class="omega__title">
          Омега-3
          <span> Тріска </span>
        </h1>
        <p class="omega__vitamin">з вітамінами А і D3</p>
        <description-product />
        <section class="omega__value">
          <article class="omega__value-item">
            <div class="omega__count">
              <button class="omega__count-button" @click="handlesubtract()">
                -
              </button>
              <div class="omega__count-item">{{ count }}</div>
              <button class="omega__count-button" @click="handleAdd()">
                +
              </button>
            </div>
            <button
              @click="addInCard()"
              class="omega__button omega__button--phone"
            >
              До кошика — 489 ₴
            </button>
            <button
              @click="addInCard()"
              class="omega__button omega__button--desktop"
            >
              До кошика
            </button>
          </article>

          <article class="omega__value-item">
            <div class="omega__amount">
              <h2 class="omega__amount-title">В упаковці:</h2>
              <p class="omega__amount-item">120 капсул по 500 мг</p>
              <p class="omega__amount-time">1 місяць прийому</p>
            </div>

            <div class="omega__price">
              <p class="omega__price-discont">963 ₴</p>
              <p class="omega__price-curent">489 ₴</p>
            </div>
          </article>
        </section>
      </div>
    </div>
    <delivery-perla />
  </main>
</template>

<script setup>
  import CaruselPerla from "@/components/CaruselPerla.vue";
  import DeliveryPerla from "@/components/DeliveryPerla.vue";
  import DescriptionProduct from "@/components/DescriptionProduct.vue";
  import { defineEmits, ref } from "vue";
  
  let productsPHotos = ref([]);
  
  productsPHotos = [
    "1_cod.png",
    "2_cod.png",
    "3_cod.png",
    "4_cod.png",
    "5_cod.png",
  ];
  
  let count = ref(1);
  let countProducts = 0;
  const emit = defineEmits(["addInCard"]);
  
  const handleAdd = () => {
    count.value++;
  };
  
  const handlesubtract = () => {
    if (count.value > 1) {
      count.value--;
    } else {
      count.value = 1;
    }
  };
  
  const addInCard = () => {
    countProducts += Number(count.value);
    emit("addInCard", countProducts);
  };
</script>

<style lang="scss">
.omega {
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 15px;

  @include onTable {
    padding: 0 35px;
  }

  &__conainer {
    @include onDesktop {
      display: flex;
      flex-direction: row-reverse;
      justify-content: center;
      gap: 30px;
    }
  }

  &__title {
    margin-top: 25px;
    font-style: normal;
    font-weight: 700;
    font-size: 25px;

    @include onTable {
      display: inline-block;
      font-size: 40px;
      margin-right: 24px;
      margin-bottom: 32px;
    }
  }

  &__title span {
    font-family: "Piazzolla", serif;
    font-weight: 500;
    font-size: 25px;

    @include onTable {
      font-size: 40px;
    }
  }

  &__vitamin {
    display: inline-block;
    padding: 2px 20px;
    font-weight: 500;
    font-size: 16px;
    background-color: #ffffff;
    border-radius: 15px;

    @include onTable {
      font-size: 22px;
    }
  }

  &__value {
    @include onTable {
      display: flex;
      flex-direction: column-reverse;
      margin-top: 40px;
      margin-bottom: 55px;
    }
  }

  &__value-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__count {
    display: none;

    @include onTable {
      display: flex;
      align-items: center;
      gap: 26px;
    }
  }

  &__count-button {
    font-size: 24px;
    border: none;
    color: rgba(0, 40, 79, 0.4);
    background-color: transparent;
  }

  &__count-item {
    font-size: 30px;
  }

  &__button {
    width: 100%;
    height: 56px;
    margin-top: 24px;
    background: #69c522;
    border-radius: 40px;
    border: none;
    font-weight: 500;
    font-size: 18px;
    color: #fff;

    @include onTable {
      width: 395px;
      margin-top: 0;
    }
  }

  &__button:hover {
    opacity: 0.5;
  }

  &__button--phone {
    @include onTable {
      display: none;
    }
  }

  &__button--desktop {
    display: none;
    @include onTable {
      display: block;
    }
  }

  &__amount {
    position: relative;
    display: flex;
    flex-direction: column;
    padding-left: 130px;
    margin-top: 32px;
    margin-bottom: 32px;
  }

  &__amount::before {
    position: absolute;
    content: "";
    display: block;
    background-image: url(../assets/img/foil.svg);
    background-size: cover;
    width: 40px;
    height: 40px;
    left: 40px;
    top: 10px;
  }

  &__amount-title {
    font-weight: 500;
    font-size: 16px;
    margin: 2px;
  }

  &__amount-item {
    font-weight: 400;
    font-size: 16px;
    margin: 2px;
  }

  &__amount-time {
    font-weight: 200;
    margin: 2px;
    opacity: 0.5;
  }

  &__price {
    display: none;

    @include onTable {
      display: flex;
      gap: 18px;
      align-items: center;
    }
  }

  &__price-curent {
    font-weight: 700;
    font-size: 40px;
  }

  &__price-discont {
    position: relative;
    font-weight: 900;
    font-size: 28px;
    letter-spacing: -0.03em;
    color: rgba(0, 40, 79, 0.3);
  }

  &__price-discont::after {
    position: absolute;
    content: "";
    display: block;
    background-image: url(../assets/img/line.svg);
    background-size: cover;
    width: 80px;
    height: 40px;
    left: 0;
    top: 5px;
  }
}
</style>
