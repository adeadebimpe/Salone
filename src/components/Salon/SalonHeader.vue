<template>
  <section class="salon-header">
    <div class="container">
      <div class="salon-header__content">
        <h1>Browse Salons Around</h1>
        <form action="">
          <div class="form-select">
            <select class="form-control" name="" id="">
              <option>State</option>
              <option>se</option>
              <option>se</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
  export default {

  };

</script>

<style lang="scss">
  .salon-header {
    background: url('../../assets/Salon.jpg') no-repeat;
    background-size: cover;
    height: 500px;
    position: relative;

    &__content {
      padding-top: 150px;
      display: flex;
      align-items: center;
      flex-wrap: wrap;

      @media screen and (min-width: 768px) {
        justify-content: center;
      }

    }

    h1 {

      color: #FFFFFF;
      margin-right: 30px;
      margin-bottom: 10px;

    }

    .form-select {
      width: 150px;
      max-width: 150px;
      background-color: rgba(255, 255, 255, 0.18);
      border: 1px solid #fff;
      border-radius: 3px;

      select {
        color: #fff;
      }
    }



  }

</style>
