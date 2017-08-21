import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from '@/views/GoodsList'
import cart from '@/views/cart'
import address from '@/views/address'
import orderConfirm from '@/views/orderConfirm'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'GoodsList',
      component: GoodsList
    },
    {
      path: '/cart',
      name: 'CartList',
      component: cart
    },
    {
      path: '/address',
      name: 'Address',
      component: address
    },
    {
      path: '/orderConfirm',
      name: 'orderConfirm',
      component: orderConfirm
    }
  ]
})
