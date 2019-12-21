import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login.vue'
Vue.use(VueRouter)

let router = new VueRouter({
  routes: [{
    name: 'login',
    path: '/login',
    component: Login
  }]
})
export default router
