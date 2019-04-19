import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: resolve => require(['@/components/HelloWorld'], resolve),
      hidden: false
    },
    {
      path: '/home',
      name: "导航一",
      // component:Home,
      component: resolve => require(['@/components/home/home.vue'], resolve),
      redirect: '/index',
      hidden:true,
      iconCls:'el-icon-location',
      z:'1',
      children: [
        {
          path: '/index',
          // component:pagehome,
          component: resolve => require(['@/components/home/index.vue'], resolve),
          name: 'index',
          hidden:false

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
          hidden: true,
          children: [{
            path: '/page31',
            // component:page3,
            component: resolve => require(['@/components/home/page31.vue'], resolve),
            name: 'page31',
            hidden: true
          }]
        },
        {
          path: '/page4',
          // component:page4,
          component: resolve => require(['@/components/home/page4.vue'], resolve),
          name: 'page4',
          hidden: true,
          children: [{
            path: '/page41',
            // component:page3,
            component: resolve => require(['@/components/home/page41.vue'], resolve),
            name: 'page41',
            hidden: true
          }]
        },
      ]
    },
    {
      path: '/home2',
      name: '导航二',
      component: resolve => require(['@/components/home/page404.vue'], resolve),
      hidden:true ,
      children:[{
        path: '/404',
        name: '404',
        component: resolve => require(['@/components/home/page404.vue'], resolve),
        hidden: true,
      }]
    },
  ]
})
