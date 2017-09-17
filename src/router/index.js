import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'

Vue.use(Router)

export function createRouter () {
  return new Router({
    linkActiveClass: 'open active',
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/about',
        name: 'About',
        component: About
      },
      {
        path: '/contact',
        name: 'Contact',
        component: Contact
      }
    ]
  })
}
