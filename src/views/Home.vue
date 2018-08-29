<template>
  <div class="row marketing">
    <h4>HTML5 Boilerplate</h4>
    <p>HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.</p>

    <h4>Sass</h4>
    <p>Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.</p>

    <h4>Bootstrap</h4>
    <p>Sleek, intuitive, and powerful mobile first front-end framework for faster and easier web development.</p>

    <b-btn class="mr-1" @click="openSwal">Sweet !</b-btn>
    <b-btn class="mr-1" variant="success" @click="showSuccessMsg()">Noty !</b-btn>
    <b-btn class="mr-1" variant="info" @click="showInfoMsg()">Noty !</b-btn>
    <b-btn class="mr-1" variant="warning" @click="showWarnMsg()">Noty !</b-btn>
    <b-btn class="mr-1" variant="danger" @click="showErrorMsg()">Noty !</b-btn>
  </div>
</template>

<script>
import swal from 'sweetalert2'
import VueNotifications from 'vue-notifications'

export default {
  name: 'Home',
  metaInfo: {
    title: 'Home',
    meta: [
      { name: 'description', content: 'Nulla quis lorem ut libero malesuada feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Cras ultricies ligula sed magna dictum porta.' }
    ]
  },
  notifications: {
    showSuccessMsg: {
      type: VueNotifications.types.success,
      title: 'Hello there',
      message: 'That\'s the success!'
    },
    showInfoMsg: {
      type: VueNotifications.types.info,
      title: 'Hey you',
      message: 'Here is some info for you'
    },
    showWarnMsg: {
      type: VueNotifications.types.warn,
      title: 'Wow, man',
      message: 'That\'s the kind of warning'
    },
    showErrorMsg: {
      type: VueNotifications.types.error,
      title: 'Wow-wow',
      message: 'That\'s the error'
    }
  },
  methods: {
    openSwal () {
      swal({
        title: 'Yo!',
        text: 'Yeaaah!',
        type: 'success',
        confirmButtonText: 'Cool'
      })
    }
  }
}
</script>
