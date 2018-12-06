<template>
  <section class="hairstyle-header">
    <div class="container">
      <div class="hairstyle-header__content">
        <div class="hairstyle-header__text">
            <h1>Nikki's Salon</h1>
        <p>The one stop shop for all your favourite hairdos and hair needs</p>
        </div>
        <div class="hairstyle-header__button">
            <button class="btn btn-primary">Book Appointment</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {

  };

</script>

<style lang="scss">

  .hairstyle-header {
    background: url('../../assets/salonstyle.jpg') no-repeat;
    background-size: cover;
    height: 500px;
    position: relative;
    &__button{
        @media screen and (max-width: 1024px){
        margin-top: 30px;  
      }
    }
    &__content {
      padding-top: 200px;
      @media screen and (min-width: 768px){
        padding-top: 300px;   
      }
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      h1 {
      color: #FFFFFF;
        margin-bottom: 10px;
    }
    
      p{
          color: #fff;
      }
      button{
          box-shadow: none;
      }
    }

    

  
  }
 

</style>
