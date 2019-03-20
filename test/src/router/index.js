import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home/home.vue'//主页
import page1 from '@/components/home/page1.vue'
import page2 from '@/components/home/page2.vue'
import page3 from '@/components/home/page3.vue'
import page4 from '@/components/home/page4.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/home',
      name: "home",
      component:Home,
      redirect:'/page1',
      children:[
        {
          path:'/page1',
          component:page1,
          name:'page1',

          hidden:true
        },
        {
          path:'/page2',
          component:page2,
          name:'page2',
          hidden:true
        },
        {
          path:'/page3',
          component:page3,
          name:'page3',
          hidden:true
        },
        {
          path:'/page4',
          component:page4,
          name:'page4',
          hidden:true
        },
      ]
    }
  ]
})
