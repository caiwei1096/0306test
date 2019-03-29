import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Home from '@/components/home/home.vue'//主页
// import page1 from '@/components/home/page1.vue'
// import page2 from '@/components/home/page2.vue'
// import page3 from '@/components/home/page3.vue'
// import page4 from '@/components/home/page4.vue'
// import pagehome from  '@/components/home/index.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      // component: HelloWorld
      component: resolve => require(['@/components/HelloWorld'], resolve)
    },
    {
      path: '/home',
      name: "home",
      // component:Home,
      component: resolve => require(['@/components/home/home.vue'], resolve),
      redirect: '/index',
      children: [
        {
          path: '/index',
          // component:pagehome,
          component: resolve => require(['@/components/home/index.vue'], resolve),
          name: 'index'
        },
        {
          path: '/page1',
          // component:page1,
          component: resolve => require(['@/components/home/page1.vue'], resolve),
          name: 'page1',

          hidden: true
        },
        {
          path: '/page2',
          // component:page2,
          component: resolve => require(['@/components/home/page2.vue'], resolve),
          name: 'page2',
          hidden: true
        },
        {
          path: '/page3',
          // component:page3,
          component: resolve => require(['@/components/home/page3.vue'], resolve),
          name: 'page3',
          hidden: true
        },
        {
          path: '/page4',
          // component:page4,
          component:resolve=>require(['@/components/home/page2.vue'],resolve),
          name: 'page4',
          hidden: true
        },
      ]
    }
  ]
})
