<template>
  <section class="popular-salon">
    <div class="container">
      <div class="popular-salon__content">
        <div class="popular-salon__header">
          <h2>Browse Popular Salons</h2>
          <a href="#">See all salons <i class="fa fa-caret-down color-primary"></i></a>
        </div>
        <div class="row">
          <router-link class="col-4 salon-item" to="/hairstyle">
            <img src="../../assets/salon1.png" alt="Salon Image" width="100%">
            <div class="salon-item__description">
              <h5>Nikky's Salon</h5>
              <p>Eric Thomas, Surulere</p>
            </div>
          </router-link>
          <router-link class="col-4 salon-item" to="/hairstyle">
            <img src="../../assets/salon2.png" alt="Salon Image" width="100%">
            <div class="salon-item__description" to="/">
              <h5>Razaa’s Touch</h5>
              <p>Ikeja, Lagos</p>
            </div>
          </router-link>
          <router-link class="col-4 salon-item" to="/hairstyle">
            <img src="../../assets/salon3.png" alt="Salon Image" width="100%">
            <div class="salon-item__description">
              <h5>Air Court</h5>
              <p>Parkview, Ikoyi</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {


  }

</script>

<style lang="scss">
  .popular-salon {
    background-color: #fcfcfc;
    padding-top: 300px;

    @media screen and (min-width: 768px) {
      padding: 100px 0px;
    }

    &__header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 50px;

      h2 {
        color: #373535;


      }


      a {

        font-family: 'Open Sans', sans-serif;
        font-style: normal;
        font-weight: bold;
        line-height: normal;
        font-size: 12px;
        color: #373535;

        @media screen and (min-width: 768px) {
          font-size: 18px;
        }


      }
    }
  }

  .salon-item {


    background: #FFFFFF;
    border-radius: 3px;
    &:hover {
      box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.08);
    }
  

  &__description {
    padding: 0px 30px 50px 30px;

    h5 {


      font-family: 'Playfair Display', sans-serif;
      font-style: normal;
      font-weight: bold;
      line-height: normal;
      font-size: 18px;

      color: #373535;

      @media screen and (min-width: 768px) {
        font-size: 24px;
      }

    }

    p {


      font-family: 'Open Sans', sans-serif;
      font-style: normal;
      font-weight: normal;
      line-height: normal;
      font-size: 12px;
      color: #373535;

      @media screen and (min-width: 768px) {
        font-size: 16px;
      }

    }
  }

  }

</style>
