import './sass/app.scss'
import 'bootstrap'

import Vue from 'vue'

import App from './App.vue'
import router from './router'

module.exports = function createApp () {
  const app = new Vue({
    router,
    render: h => h(App)
  })

  return { app, router }
}
