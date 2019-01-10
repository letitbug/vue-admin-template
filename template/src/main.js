// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import 'normalize.css'

import Element from 'element-ui'
import '@/styles/element-reboot.scss'
import 'element-ui/lib/theme-chalk/display.css'

import '@/styles/va.core.scss'

import App from './App'
import router from './router'
import store from './store'

import '@/assets/icons'

Vue.config.productionTip = false

Vue.use(Element)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
