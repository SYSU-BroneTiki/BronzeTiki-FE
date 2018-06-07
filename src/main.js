// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 样式重置
import './assets/styles/reset.css'
// 1像素边框
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import './assets/styles/iconfont.js'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(elementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
