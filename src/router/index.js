import Vue from 'vue'
import Router from 'vue-router'
import Front from '@/pages/Front'
import ProductList from '@/pages/ProductList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Front',
      component: Front
    },
    {
      path: '/about',
      name: 'ProductList',
      component: ProductList,
      redirect: to => {
        console.log(navigator.userAgent)
      }
    }
  ]
})
