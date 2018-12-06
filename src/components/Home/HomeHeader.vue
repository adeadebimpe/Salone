<template>
  <section class="hero-header">
    <div class="container">
      <div class="hero-header__content">
        <div class="row">
          <div class="col-7">
            <h1>Book hair appointments from your favourite salons, online!</h1>
            <p>Book an appointment by selecting the date and time.</p>
          </div>
          <div class="col-5">
            <div class="salon-form">
              <form action>
                <div class="form-group">
                  <label for>Where?</label>
                  <div class="row">
                    <div class="col-6 form-select">
                      <select class="form-control" name id>
                        <option>State</option>
                        <option>se</option>
                        <option>se</option>
                      </select>
                    </div>
                    <div class="col-6 form-select">
                      <select class="form-control" name id>
                        <option>se</option>
                        <option>se</option>
                        <option>se</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label for>When?</label>
                  <date-pick v-model="date" :pickTime="true" :format="'YYYY-MM-DD HH:mm'"></date-pick>
                </div>
                <button class="btn btn-primary btn-block" href="#" role="button">Find Available Salon</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import DatePick from "vue-date-pick";
  import "vue-date-pick/dist/vueDatePick.css";

  export default {
    components: {
      DatePick
    },
    data: () => ({
      date: "2019-01-01 14:30"
    })
  };

</script>

<style lang="scss">
  .hero-header {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 70.91%), url('../../assets/hero-image.jpg') no-repeat;
    background-size: cover;
    height: 600px;
    position: relative;
    @media screen and (min-width: 768px){
      height: 800px;
    }
    &__content {
      padding-top: 200px;
    }

    h1 {

      color: #FFFFFF;
      max-width: 600px;
    }

    p {

      font-weight: bold;
      color: #FFFFFF;
      margin: 50px 0px;


    }

    .salon-form {
      background: #FFFFFF;
      box-shadow: 0px 34px 14px rgba(0, 0, 0, 0.15);
      border-radius: 3px;
      padding: 50px;

      @media screen and (max-width: 768px) {

        position: absolute;
        width: 100%;
        left: 0px;
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
        box-shadow: none;
      }
    }

  }
  

  .vdpComponent {
    border: 1px solid #C3C3C3;
    border-radius: 3px;
    padding: 10px;

    &.vdpWithInput>input {
      padding-right: 30px;
      font-size: 14px;
      border: none;
    }


  }

</style>
