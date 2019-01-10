// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant'
import store from './store/index'
import VueTouch from 'vue-touch'
import 'vant/lib/index.css'
import './assets/style/css/reset.css'

Vue.config.productionTip = false
Vue.use(Vant).use(VueTouch,{name:'v-touch'})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
