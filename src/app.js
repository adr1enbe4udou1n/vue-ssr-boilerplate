import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import App from './App.vue'
import { createRouter } from './router'
import { createStore } from './store'

Vue.use(BootstrapVue)

export function createApp () {
  const router = createRouter()
  const store = createStore()

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })

  return { app, router, store }
}
