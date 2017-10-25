import './sass/app.scss'
import 'slick-carousel'
import sweetalert2 from 'sweetalert2'

import { createApp } from './app'

const { app, router } = createApp()

router.onReady(() => {
  app.$mount('#app')
})

window.swal = sweetalert2
