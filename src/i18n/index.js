import Vue from 'vue'
import VueI18n from 'vue-i18n'

// Locales
import en from './en'
import fr from './fr'

Vue.use(VueI18n)

export function createI18n () {
  return new VueI18n({
    locale: process.env.APP_LOCALE || 'en',
    messages: {
      en,
      fr
    }
  })
}
