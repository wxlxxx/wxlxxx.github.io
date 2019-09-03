import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Stage1 from './views/Stage1.vue'
import Stage2 from './views/Stage2.vue'
import Stage3 from './views/Stage3.vue'

import Stage1List from './views/stage1/Stage1List.vue'
import Doc1 from './views/stage1/Doc1.vue'
import Doc2 from './views/stage1/Doc2.vue'
import Doc3 from './views/stage1/Doc3.vue'
import Doc4 from './views/stage1/Doc4.vue'

import Stage2List from './views/stage2/Stage2List.vue'
import Demo1 from './views/stage2/Demo1.vue'
import Demo2 from './views/stage2/Demo2.vue'
import Demo3 from './views/stage2/Demo3.vue'
import Demo4 from './views/stage2/Demo4.vue'
import Demo5 from './views/stage2/Demo5.vue'
import Demo6 from './views/stage2/Demo6.vue'
import Demo7 from './views/stage2/Demo7.vue'

import Stage3List from './views/stage3/Stage3List.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
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
          path: 'doc3',
          name: 'AJAX',
          component: Doc3
        },
        {
          path: 'doc4',
          name: 'this机制',
          component: Doc4
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
          name: 'vue数据绑定原理',
          component: Demo1
        },
        {
          path: 'demo2',
          name: 'vue虚拟DOM原理',
          component: Demo2
        },
        {
          path: 'demo3',
          name: 'Maze',
          component: Demo3
        },
        {
          path: 'demo4',
          name: 'Progress loop',
          component: Demo4
        },
        {
          path: 'demo5',
          name: 'Progress loop with canvas',
          component: Demo5
        },
        {
          path: 'demo6',
          name: 'marquee',
          component: Demo6
        },
        {
          path: 'demo7',
          name: 'AnimateDemo',
          component: Demo7
        }
      ]
  	},
    {
      path: '/stage3/',
      name: '内部分享',
      component: Stage3,
      children: [
        {
          path: '',
          name: '内部分享',
          component: Stage3List
        },
        {
          path: 'share1',
          fullPath: '/share1.html',
          name: 'A pixel is not a pixel is not a pixel'
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
