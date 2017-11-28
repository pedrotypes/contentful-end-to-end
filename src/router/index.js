import Vue from 'vue'
import Router from 'vue-router'

import SpacesList from '@/components/SpacesList'
import Space from '@/components/Space'

Vue.use(Router)

var router = new Router({
  mode: 'history',
  routes: [
    // Auth and space selection
    {
      path: '/',
      component: SpacesList
    },
    // Space-specific learning materials
    {
      path: '/spaces/:spaceId',
      component: Space,
      props: true
    }
  ]
})

export default router
