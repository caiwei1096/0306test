// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import 'es6-promise/auto'
import {store} from './vuex/index'
import App from './App'
import qs from "qs"
import axios from 'axios'
import router from './router'
//将axios挂载到原型上
Vue.prototype.$axios = axios;
axios.defaults.baseURL =  " https://www.easy-mock.com/mock/5ca49105ea0dc52bf3b67ea8/testdate";

//添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 参数格式转换
    console.log(config,'config')
    if(config.method=="post"){
      console.log(config.data,'拦截器')
        config.data = qs.stringify(config.data);
    }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  })


Vue.use(Vuex);
Vue.use(ElementUI);
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
