<template>
 
    <ul class="deliveri">
      <li class="deliveri__item">
        <div class="deliveri__img">
          <img src="../assets/img/icon_free_delivery.png" alt="free_delivery">
        </div>        
        <p class="deliveri__text">Безкоштовна доставка 
           від 1800 грн</p>
      </li>
      <li class="deliveri__item">
        <div class="deliveri__img">
          <img src="../assets/img/sending.svg" alt="free_delivery">
        </div>  
        <p class="deliveri__text">
          Відправки в день оформлення замовлення до 16:00</p>
      </li>
      <li class="deliveri__item">
        <div class="deliveri__img">
          <img src="../assets/img/return.svg" alt="free_delivery">
        </div>  
        <p class="deliveri__text">Гарантія повернення грошових коштів</p>
      </li>
    </ul>
</template>


<style lang="scss"> 

.deliveri {
  width: 100%;
  padding: 35px;
  background: #FFFFFF;
  border-radius: 15px;
  list-style: none;

  @include onTable {
    display: flex;
    justify-content: space-between;
    gap: 24px;
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 35px;

    @include onTable {
    flex-direction: column;
  }

    @include onDesktop {
      flex-direction: row;
      align-items: center;   
    }
  }

  &__img {
    box-sizing: border-box;
    display: block;
    width: 54px;
    height: 54px;
    background-size:cover;
    padding: 10px;
  }

  &__text {
    font-weight: 400;
    font-size: 16px;

    @include onTable {
      font-size: 18px;
      text-align: center;
    }

    @include onDesktop {
      font-size: 18px;
      text-align: start;
    }
  }
}

</style>
