import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Stage1 from './views/Stage1.vue'
import Stage2 from './views/Stage2.vue'

import Test1 from './views/stage1/Test1.vue'
import Test2 from './views/stage1/Test2.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      level: 0
    },
    {
  		path: '/stage1',
  		name: 'javascript基础',
  		component: Stage1,
      level: 1
  	},
  	{
  		path: '/stage2',
  		name: 'javascript应用',
  		component: Stage2,
      level: 1
  	},

    {
      path: '/stage1/test1',
      name: 'test1',
      component: Test1,
      level: 2
    },
    {
      path: '/stage1/test2',
      name: 'test2',
      component: Test2,
      level: 2
    },
    // {
    //   path: '/about',
    //   name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    //}
  ]
})
