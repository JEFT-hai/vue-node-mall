// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
import infiniteScroll from 'vue-infinite-scroll'
import {currency} from "./util/currency"

Vue.filter("currency",currency);

Vue.use(VueLazyload,{
	loading:'/static/loading-svg/loading-bars.svg'
})


import './assets/style.css'
import './assets/css/base.css'
import './assets/css/header.css'


Vue.config.productionTip = false

Vue.use(infiniteScroll);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
