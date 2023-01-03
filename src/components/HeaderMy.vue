<template>
  <span class="header__top">Безкоштовна доставка від 1800 грн</span>
  <header class="header">
    <div class="header__container">
      <div class="header__item">
        <a class="header__link" href="#">
          <img
          class="header__menu"
          src="../assets/img/burger-desk.svg"
          alt="menu"
        />
        </a>
        <a class="header__link" href="#">
          <img
          class="header__search"
          src="../assets/img/search.svg"
          alt="search"
        />
        </a>
      </div>
      <div class="header__item">
        <a class="header__link" href="#">
          <img 
          class="header__logo" 
          src="../assets/img/Logo.svg" 
          alt="logo" />
        </a>
      </div>
      <div class="header__item">
        <a class="header__link" href="#">
          <img
          class="header__phone"
          src="../assets/img/icon-phone.svg"
          alt="phone"
        />
        </a>
        <a class="header__link" href="#">
          <img 
          class="header__cart" 
          src="../assets/img/cart.svg" 
          alt="cart" />
        </a>
        <div class="header__cart-count">{{ props.countProducts }}</div>
      </div>
    </div>
    <ul class="header__nav-decktop">
      <li class="header__nav-item">
        <a class="header__nav-link" href="#">Омега-3</a>
      </li>
      <li class="header__nav-item">
        <a class="header__nav-link" href="#">Вітаміни</a>
      </li> 
      <li class="header__nav-item">
        <a class="header__nav-link" href="#">Добавки</a>
      </li> 
      <li class="header__nav-item">
        <a class="header__nav-link" href="#">Доставка</a>
      </li>  
      <li class="header__nav-item">
        <a class="header__nav-link" href="#">Про нас</a>
      </li>     
    </ul>
  </header>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  countProducts: Number,
});
</script>

<style lang="scss">
  .header {  

    &__container {
      display: flex;
      max-width: 1320px;
      margin: 0 auto;
      justify-content: space-between;
      padding: 35px 17px 55px 17px;
  
      @include onTable {
        padding: 45px 35px 64px 35px;
      }
  
      @include onTable {
        padding: 45px 35px 55px 35px;
      }
    }
  
    @include onTable {
      padding: 0 35px;
    }
    &__item {
      position: relative;
      display: flex;
      gap: 17px;
    }
  
    &__link:hover {
     opacity: 0.5;
    }
  
    &__top {

      display: flex;
      justify-content: center;
      align-items: center;
      padding: 4px;
      background-color: #99afff;
      font-weight: 500;
      font-size: 14px;
      color: #fff;
    }  
  
    &__top::after {
      position: relative;
      content: "";
      background-image: url(../assets/img/drugsicon_1.png);
      width: 14px;
      height: 14px;
      left: 12px;
    }
  
    &__top::before {
      position: relative;
      content: "";
      background-image: url(../assets/img/drugsicon_1.png);
      width: 14px;
      height: 14px;
      right: 12px;
    }
  
    &__menu {
      width: 17px;
      height: 12px;
  
      @include onTable {
        width: 26px;
        height: 20px;
      }
    }
  
    &__search {
      width: 15px;
      height: 15px;
  
      @include onTable {
        width: 23px;
        height: 23px;
      }
    }
  
    &__logo {
      width: 120px;
      height: 20px;
  
      @include onTable {
        width: 150px;
        height: 24px;
      }
  
      @include onDesktop {
        width: 196px;
        height: 32px;
      }
    }
  
    &__phone {
      width: 16px;
      height: 16px;
  
      @include onTable {
        width: 25px;
        height: 25px;
      }
    }
  
    &__cart {
      width: 17px;
      height: 16px;
  
      @include onTable {
        width: 26px;
        height: 26px;
      }
    }
  
    &__cart-count {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      background-color: #F5F352;
      width: 14px;
      height: 14px;
      right: -5px;  
      top: -10px;
      border-radius: 50%; 
      font-weight: 400;
      font-size: 8px; 
  
      @include onTable {
        width: 26px;
        height: 26px;
        font-size: 16px; 
        right: -15px;  
        top: -18px;
      }
     
    }
  
    &__nav-decktop {
      display: none;
  
      @include onTable {
        display: flex;
        justify-content: space-between;
        padding-right: 36px;
        padding-left: 36px;
        padding-bottom: 46px;
      }
  
      @include onDesktop {
        justify-content: center;
        gap: 40px;      
      }
    }
  
    &__nav-item {
     list-style: none;
    }
  
      &__nav-link {
        text-decoration: none;
        color: #000;
        font-weight: 400;
        font-size: 23px;
      }
      
      &__nav-link:hover {
        color: #000;
        opacity: 0.5;
      }

  }
</style>
