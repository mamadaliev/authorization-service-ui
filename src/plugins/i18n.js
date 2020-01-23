import Vue from 'vue'
import VueI18n from 'vue-i18n'
import us from './../langs/us.json'

Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: 'us',
  fallbackLocale: 'ru',
  messages: {
    us
  }
})
