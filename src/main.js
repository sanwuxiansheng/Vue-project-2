// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 注册路由器
import router from './router'
// 引入状态数据库
import store from './store/index'
// 引入表单验证文件
import './validate'
// 定义全局组件
import Header from './components/Heard/index.vue'
import Star from './components/Star'
import ShopHeard from './components/ShopHeard'
// 引入并注册使用按钮
import { Button } from 'mint-ui';
Vue.component(Button.name, Button);
Vue.component('Header', Header)
Vue.component('Star', Star)
Vue.component('ShopHeard', ShopHeard)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
