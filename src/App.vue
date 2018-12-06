<template>
  <div id="app">
   <Navigation />
    <router-view></router-view>

    <Footer />
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
import Home from './components/Home.vue';

import Footer from './components/Footer.vue';
import Salon from './components/Salon.vue';
import Hairstyle from './components/Hairstyle.vue';
export default {
  name: 'App',
  components: {
    Navigation,
    Home,
    Footer,
    Salon,
    Hairstyle,
  }
}
</script>

<style>

</style>
