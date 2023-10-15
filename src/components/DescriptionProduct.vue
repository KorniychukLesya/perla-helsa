<template>   
      <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            class="nav-link active"
            id="nav-home-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-home"
            type="button"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
          >
            Опис
          </button>
          
          <button
            class="nav-link"
            id="nav-contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-contact"
            type="button"
            role="tab"
            aria-controls="nav-contact"
            aria-selected="false"
          >
            ІНГРЕДІЄНТИ
          </button>
          <button
            class="nav-link"
            id="nav-contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-contact"
            type="button"
            role="tab"
            aria-controls="nav-contact"
            aria-selected="false"
          >
            ІНГРЕДІЄНТИ
          </button>
          <button
            class="nav-link"
            id="nav-contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-contact"
            type="button"
            role="tab"
            aria-controls="nav-contact"
            aria-selected="false"
          >
            СПОСІБ ЗАСТОСУВАННЯ
          </button>
          <button
            class="nav-link"
            id="nav-contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-contact"
            type="button"
            role="tab"
            aria-controls="nav-contact"
            aria-selected="false"
          >
            СПОСІБ ЗАСТОСУВАННЯ
          </button>
        </div>
      </nav>
      <div class="tab-content" id="nav-tabContent">
        <div
          class="tab-pane fade show active"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
        >
          <div class="tab-content-phone">
            Комплекс EPA + DHA кислот і натуральних вітамінів А & D3 для здоров'я
            твоєї шкіри,
            <span id="dots">...</span>
            <span id="more">
              волосся, зору, сну, міцних кісток, суглобів та імунітету.
            </span>
            <button @click="toglContent()" id="contentBtn">Дізнатись більше</button>
          </div>
          <div class="tab-content-descktop">
            Комплекс EPA + DHA кислот і натуральних вітамінів А & D3 для здоров'я
            твоєї шкіри, волосся, зору, сну, міцних кісток, суглобів та імунітету.
          </div>
        </div>
  
        <div
          class="tab-pane fade"
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
        >
        <div class="tab-content-phone">
           ...
          </div>
          <div class="tab-content-descktop">
          ...
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="nav-contact"
          role="tabpanel"
          aria-labelledby="nav-contact-tab"
        >
        <div class="tab-content-phone">
            ...
          </div>
          <div class="tab-content-descktop">
           ...
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="nav-contact"
          role="tabpanel"
          aria-labelledby="nav-contact-tab"
        >
        <div class="tab-content-phone">
            ...
          </div>
          <div class="tab-content-descktop">
           ...
          </div>
        </div>
      </div>
     
</template>
  
<script setup>
 
  const toglContent = () => {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("contentBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Дізнатись більше";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Приховати";
      moreText.style.display = "inline";
    }
  };
</script>
  
<style lang="scss">
  
  #more {
    display: none;
  }
  
  #contentBtn {
    border: none;
    font-weight: 500;
    padding: 0;
    margin-top: 8px;
    font-size: 14px;
    color: #1d1d1b;
    border-bottom: 1px solid #1d1d1b;
    background-color: transparent;
  }  

  .nav {
    display: flex;
    justify-content: space-between;
  }
  
  .nav .nav-link {
    text-transform: uppercase;
    padding: 8px 5px;
    font-weight: 700;
    font-size: 11px;
    color: #00284f;
    opacity: 0.4;
    border-bottom: 1px solid #00284f;

    @include onTable {
        font-size: 17px;
    }
  }
 
  nav .nav-tabs .nav-link.active {
    border: none;
    background-color: transparent;
    border-bottom: 1px solid #00284f;
    opacity: 1;
  }
  
  .tab-pane {
    font-weight: 400;
    font-size: 16px;

    @include onTable {
        font-size: 18px;
    }
  }
  
  .tab-content {
    margin-top: 12px;
  }

  .tab-content-descktop {
    display: none;

    @include onTable {
        display: flex;
    }
  }

  .tab-content-phone {
    @include onTable {
        display: none;
    }
  }
</style>
  