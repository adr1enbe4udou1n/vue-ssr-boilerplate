import './sass/app.scss'
import 'bootstrap'

import 'slick-carousel'
import sweetalert2 from 'sweetalert2'

import { createApp } from './app'

const { app, router } = createApp()

router.onReady(() => {
  app.$mount('#app')
})

window.swal = sweetalert2;

(function ($) {
  $('.slider').not('.slick-initialized').removeAttr('hidden').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1
  })

  $('button.sweet').click(() => {
    window.swal({
      title: 'Yo!',
      text: 'Yeaaah!',
      type: 'success',
      confirmButtonText: 'Cool'
    })
  })
})(jQuery)
