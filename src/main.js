import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import toast from 'components/common/toast'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

const loadImage = require('assets/img/common/placeholder.png')


//安装toast插件,vue-lazyload
Vue.use(toast)
Vue.use(VueLazyLoad, {
  loading: loadImage
})

//解决移动端300ms延迟问题
FastClick.attach(document.body)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

