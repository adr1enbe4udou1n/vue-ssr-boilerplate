import './sass/app.scss'
import 'slick-carousel'
import sweetalert2 from 'sweetalert2'

import { createApp } from './app'

const { app, router, store } = createApp()

if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}

router.onReady(() => {
  app.$mount('#app')
})

window.swal = sweetalert2
