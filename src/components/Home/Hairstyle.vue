<template>
  <section class="hairstyle">
    <div class="container">
      <div class="hairstyle__content">
        <div class="row align-items-center">
          <div class="col-6">
            <span class="colored-text">
              Hairstyle of the week
            </span>
            <h2>
              The crown afro- <br>
              the new black girl.
            </h2>
            <p>lorem ipsulorem ipsulorem ipsulor em ipsulorem i psulorem ipsulorem ipsulorem ipsulorem ipsu losu orem
              ipsulorem sulorem ipsulorem ipsulorem</p>
            <p>lorem ipsulorem ipsulorem ipsulor em ipsulorem i psulorem ipsulorem ipsulorem ipsulorem ipsu losu orem
              ipsulorem sulorem ipsulorem ipsulorem</p>
            <button class="btn btn-primary" href="#">Get this style</button>
          </div>
          <div class="col-6">
            <img src="../../assets/Hairstyle.png" alt="hairstyle" width="100%">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {

  }

</script>

<style lang='scss'>
  .hairstyle {
    padding: 50px 0px;
    @media screen and (min-width: 768px) {
          padding: 100px 0px;
      }
    &__content {
      @media screen and (max-width: 767px) {
        .row {
          flex-direction: column-reverse;
        }
        .col-6{
            margin-bottom: 30px;
        }
      }
    }

    h2 {
      color: #373535;
      margin-bottom: 30px;

      @media screen and (min-width: 768px) {
        margin-bottom: 30px;
      }
    }

    p {
      margin-bottom: 30px;

      font-weight: normal;
      line-height: 27px;
      font-size: 18px;
      max-width: 444px;
      color: #373535;


    }
  }

  .colored-text {

    font-style: normal;
    font-weight: bold;
    line-height: normal;
    font-size: 18px;

    color: #FF66B9;


  }

</style>
