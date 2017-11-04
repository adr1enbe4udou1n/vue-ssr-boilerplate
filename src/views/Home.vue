<template>
  <div class="row marketing">
    <h4>HTML5 Boilerplate</h4>
    <p>
      HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.</p>

    <h4>Sass</h4>
    <p>Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.</p>

    <h4>Bootstrap</h4>
    <p>Sleek, intuitive, and powerful mobile first front-end framework for faster and easier web development.</p>

    <b-button class="sweet">Sweet !</b-button>
  </div>
</template>

<script>
  export default {
    name: 'home',
    metaInfo: {
      title: 'Home',
      meta: [
        { name: 'description', content: 'Nulla quis lorem ut libero malesuada feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Cras ultricies ligula sed magna dictum porta.' }
      ]
    },
    mounted () {
      $('button.sweet').click(() => {
        window.swal({
          title: 'Yo!',
          text: 'Yeaaah!',
          type: 'success',
          confirmButtonText: 'Cool'
        })
      })
    }
  }
</script>
