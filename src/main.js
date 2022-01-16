import Vue from 'vue'
import App from './App.vue'

import router from './router'

import store from './vuex';

import './axios';

Vue.config.productionTip = false

import Toasted from 'vue-toasted';
Vue.use(Toasted, {
  duration: 2500,
  position: 'top-center',
  theme: 'outline',
  iconPack: 'material'
})


new Vue({
  router,
  store,
  render: h => h(App),
},).$mount('#app')
