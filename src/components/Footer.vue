<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-3">
          <h3>Customer Care</h3>
          <ul class="nav">
            <li class="nav-item">FAQs</li>
            <li class="nav-item">Live Chat</li>
            <li class="nav-item">How it works</li>
          </ul>
        </div>
        <div class="col-3">
          <h3>Contact Us</h3>
          <div class="row">
            <div class="col-6">
              <ul class="nav">
                <li class="nav-item">Facebook</li>
                <li class="nav-item">Twitter</li>
                <li class="nav-item">Instagram</li>
              </ul>
            </div>
            <div class="col-6">
              <ul class="nav">
                <li class="nav-item">Hello@salone.ng</li>
                <li class="nav-item">+2349012345678</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-3">
          <h3>Cities</h3>
          <div class="row">
            <div class="col-6">
              <ul class="nav">
                <li class="nav-item">Lagos</li>
                <li class="nav-item">Abeokuta</li>
                <li class="nav-item">Abuja</li>
                <li class="nav-item">Ibadan</li>
              </ul>
            </div>
            <div class="col-6">
              <ul class="nav">
                <li class="nav-item">Kogi</li>
                <li class="nav-item">Delta</li>
                <li class="nav-item">New York</li>
                <li class="nav-item">Eko Atlantic</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-3">
          <h3>Company</h3>
          <ul class="nav">
            <li class="nav-item">Career</li>
            <li class="nav-item">About Us</li>
            <li class="nav-item">Press</li>
            <li class="nav-item">Newsletter</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {};

</script>

<style lang="scss">
  footer {
    padding: 50px 0px;
@media screen and (min-width: 768px ){
         padding: 100px 0px;  
        }
    h3 {
      font-family: "Playfair Display", serif;
      font-style: normal;
      font-weight: normal;
      line-height: normal;
      font-size: 18px;

      color: #373535;
        @media screen and (min-width: 768px ){
          font-size: 24px;  
        }
    }

    ul {
      margin-top: 30px;

      li {


        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        line-height: 31px;
        font-size: 14px;

        color: #B5B5B5;


      }
    }
  }

</style>
