<template>
  <div id="app">
    <div class="header">
      <b-container>
        <b-nav class="nav-pills pull-right">
          <b-nav-item to="/" exact>Home</b-nav-item>
          <b-nav-item to="about">About</b-nav-item>
          <b-nav-item to="contact">Contact</b-nav-item>
        </b-nav>
        <h3 class="text-muted">vue-boilerplate</h3>
      </b-container>
    </div>

    <div class="container">
      <div class="slider" hidden>
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
        <div><h3>5</h3></div>
        <div><h3>6</h3></div>
      </div>

      <b-alert :variant="`${message.type}`" v-if="message">
        {{ message.body }}
      </b-alert>
      <router-view></router-view>
    </div>

    <div class="footer">
      <b-container>
        <p><i class="fa fa-code"></i> with <i class="fa fa-heart"></i> by mycompany.com</p>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  metaInfo: {
    titleTemplate: '%s | Vue SSR Boilerplate',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' }
    ]
  },
  data: () => {
    return {
      message: null
    }
  },
  mounted () {
    $('.slider').not('.slick-initialized').removeAttr('hidden').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1
    })
  }
}
</script>
