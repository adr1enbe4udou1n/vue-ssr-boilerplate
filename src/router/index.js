import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Home from '../views/Home'
import About from '../views/About'
import Contact from '../views/Contact'

Vue.use(Router)
Vue.use(Meta)

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
