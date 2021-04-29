import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


import Inventory from './../views/Inventory.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/inventory',
    name: 'Inventory',
    component: Inventory
  },
  // {
  //   path: '/edit',
  //   name: 'EditInventory',
  //   component: EditInventory
  // },
  
    // component: function () {
    //   return import(/* webpackChunkName: "about" */ '../views/About.vue')
    
]

const router = new VueRouter({
  routes
})

export default router
