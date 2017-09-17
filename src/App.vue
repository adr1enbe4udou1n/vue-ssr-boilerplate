<template>
  <div id="app">
    <div class="header">
      <div class="container">
        <ul class="nav nav-pills pull-right">
          <li class="nav-item">
            <router-link class="nav-link" to="/" exact>Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="contact">Contact</router-link>
          </li>
        </ul>
        <h3 class="text-muted">express-boilerplate</h3>
      </div>
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

      <div :class="`alert alert-${message.type}`" role="alert" v-if="message">
        <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
        <span class="sr-only">Error:</span>
        {{ message.body }}
      </div>
      <router-view></router-view>
    </div>

    <div class="footer">
      <div class="container">
        <p><i class="fa fa-code"></i> with <i class="fa fa-heart"></i> by mycompany.com</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data: () => {
      return {
        message: null
      }
    }
  }
</script>
