<template>
  <div class="home-page">
    <HomeHeader />
    <HomeSalon />
    <Hairstyle />
    <Subscribe />
    
  </div>
</template>

<script>

import HomeHeader from './Home/HomeHeader.vue';
import HomeSalon from './Home/HomeSalon.vue';
import Hairstyle from './Home/Hairstyle.vue';
import Subscribe from './Home/Subscribe.vue';

export default {
    name: 'Home',
  components: {
    HomeHeader,
    HomeSalon,
    Hairstyle,
    Subscribe,
    
  }
}
</script>

<style lang="scss">
 
</style>
