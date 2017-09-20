import './sass/app.scss'
import 'bootstrap'

import { createApp } from './app'

const { app, router } = createApp()

router.onReady(() => {
  app.$mount('#app')
})
