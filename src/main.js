import Vue from 'vue'

import App from './App'
import { createRouter } from './router'
import { createStore } from './store'

import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue'

Vue.use(BootstrapVue)

export function createApp () {
  const router = createRouter()
  const store = createStore()

  const app = new Vue({
    router,
    store,
    render: (h) => h(App)
  })

  return { app, router, store }
}
