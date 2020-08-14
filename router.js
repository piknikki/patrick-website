import Vue from 'vue'
import Router from 'vue-router'

import Welcome from './src/components/Welcome'
import ViewItem from '@/components/ViewItem'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/:item_id',
      name: 'view-item',
      component: ViewItem
    }
  ]
})
