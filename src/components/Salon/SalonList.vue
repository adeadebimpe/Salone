<template>
  <section class="salon-list">
    <div class="container">
      <div class="salon-list__content">
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
            <div class="salon-item__description">
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
          <router-link class="col-4 salon-item" to="/hairstyle">
            <img src="../../assets/salon3.png" alt="Salon Image" width="100%">
            <div class="salon-item__description">
              <h5>Air Court</h5>
              <p>Parkview, Ikoyi</p>
            </div>
          </router-link>
          <router-link class="col-4 salon-item" to="/hairstyle">
            <img src="../../assets/salon3.png" alt="Salon Image" width="100%">
            <div class="salon-item__description">
              <h5>Air Court</h5>
              <p>Parkview, Ikoyi</p>
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
  .salon-list {
    background-color: #fcfcfc;
    padding: 100px 0px;
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
        font-size: 24px;

        color: #373535;


      }

      p {

        font-size: 16px;
        color: #373535;
      }
    }

  }
</style>
