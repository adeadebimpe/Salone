import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Salon from '@/components/Salon'
import Hairstyle from '@/components/Hairstyle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, 
    {

      path: '/salon',
      name: 'salon',
      component: Salon
    },
    {
      path: '/hairstyle',
      name: 'Hairstyle',
      component: Hairstyle
    }
  ]
})
