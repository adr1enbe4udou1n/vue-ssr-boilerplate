<template>
  <div id="app">
    <div class="header">
      <b-container>
        <div class="d-flex justify-content-between">
          <h3 class="text-muted">vue-ssr-boilerplate</h3>
          <b-nav class="nav-pills float-right">
            <b-nav-item 
              to="/" 
              exact
            >Home</b-nav-item>
            <b-nav-item to="/about">About</b-nav-item>
            <b-nav-item to="/contact">Contact</b-nav-item>
          </b-nav>
        </div>
      </b-container>
    </div>

    <div class="container">
      <b-carousel 
        v-if="$route.name === 'home'"
        id="carousel1"
        v-model="slide"
        style="text-shadow: 1px 1px 2px #333;"
        controls
        indicators
        background="#ababab"
        :interval="4000"
        img-width="1024"
        img-height="480"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Text slides with image -->
        <b-carousel-slide 
          caption="First slide"
          text="Nulla vitae elit libero, a pharetra augue mollis interdum."
          img-src="https://picsum.photos/1024/480/?image=52"
        />

        <!-- Slides with custom text -->
        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
          <h1>Hello world!</h1>
        </b-carousel-slide>

        <!-- Slides with image only -->
        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58" />

        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <b-carousel-slide>
          <img 
            slot="img" 
            class="d-block img-fluid w-100" 
            width="1024" 
            height="480"
            src="https://picsum.photos/1024/480/?image=55" 
            alt="image slot"
          >
        </b-carousel-slide>

        <!-- Slide with blank fluid image to maintain slide aspect ratio -->
        <b-carousel-slide 
          caption="Blank Image" 
          img-blank 
          img-alt="Blank image"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque
            ut lacus vel interdum.
          </p>
        </b-carousel-slide>
      </b-carousel>

      <b-alert 
        v-if="message" 
        :variant="`${message.type}`"
      >
        {{ message.body }}
      </b-alert>
      <router-view />
    </div>

    <div class="footer">
      <b-container>
        <p><font-awesome-icon icon="code" /> with <font-awesome-icon icon="heart" /> by mycompany.com</p>
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
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
      }
    ]
  },
  data() {
    return {
      slide: 0,
      sliding: null,
      message: null
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
  }
}
</script>
