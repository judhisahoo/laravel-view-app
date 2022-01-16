import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import LoginPage from './components/user/Login.vue'
import Register from './components/user/Register.vue'
import Forgot from './components/user/Forgot.vue'
import Resetpass from './components/user/Resetpass.vue'
import Product from './components/product/Products.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes:[
    {path: '/',component:Home},
    {path: '/login',component:LoginPage},
    {path: '/register',component:Register},
    {path: '/forgot',component:Forgot},
    {path: '/reset-password/:token',component:Resetpass},
    {path: '/product-list',component:Product},
    
  ]
})