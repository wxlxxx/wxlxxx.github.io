import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Stage1 from './views/Stage1.vue'
import Stage2 from './views/Stage2.vue'

import Stage1List from './views/stage1/Stage1List.vue'
import Doc1 from './views/stage1/Doc1.vue'
import Doc2 from './views/stage1/Doc2.vue'
import Doc3 from './views/stage1/Doc3.vue'

import Stage2List from './views/stage2/Stage2List.vue'
import Demo1 from './views/stage2/Demo1.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
  		path: '/stage1/',
  		name: 'javascript基础',
  		component: Stage1,
      children: [
        {
          path: '',
          name: 'javascript基础',
          component: Stage1List
        },
        {
          path: 'doc1',
          name: 'javascript数据类型及检测方法',
          component: Doc1
        },
        {
          path: 'doc2',
          name: '原型链',
          component: Doc2
        },
        {
          path: 'doc23',
          name: 'AJAX',
          component: Doc3
        },
      ]
  	},
  	{
  		path: '/stage2/',
  		name: 'javascript应用',
  		component: Stage2,
      children: [
        {
          path: '',
          name: 'javascript应用',
          component: Stage2List
        },
        {
          path: 'demo1',
          name: 'CreateJs应用案例',
          component: Demo1
        }
      ]
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
