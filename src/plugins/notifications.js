import Vue from 'vue'
import VueNotifications from 'vue-notifications'
import Noty from 'noty'

function toast ({ title, message, type, timeout, cb }) {
  if (type === VueNotifications.types.warn) {
    type = 'warning'
  }

  return new Noty({
    layout: 'topRight',
    theme: 'bootstrap-v4',
    timeout: 2000,
    text: message,
    type
  }).show()
}

const options = {
  success: toast,
  error: toast,
  info: toast,
  warn: toast
}

Vue.use(VueNotifications, options)
