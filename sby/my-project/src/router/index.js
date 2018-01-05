import Vue from 'vue'
import Router from 'vue-router'
import Goods from '../components/goods/goods.vue'
import Seller from '../components/seller/seller.vue'
import Ratings from '../components/ratings/ratings.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/goods'
    },
    {
      path: '/goods',
      component: Goods
    },
    {
      path: '/seller',
      component: Seller
    },
    {
      path: '/ratings',
      component: Ratings
    }
  ]
})
