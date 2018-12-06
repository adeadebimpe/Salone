<template>
  <div class="salon-page">
   <SalonHeader />
    <SalonList />
    
    
  </div>
</template>

<script>

import SalonHeader from './Salon/SalonHeader.vue';
import SalonList from './Salon/SalonList.vue';


export default {
     name: 'Salon',
  components: {
   
    SalonList,
    SalonHeader,
   
    
  }
}
</script>

<style lang="scss">
 
</style>
