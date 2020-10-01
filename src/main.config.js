import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './locales/en.json'
import vOutsideEvents from 'vue-outside-events'
import { Api } from './services/base/Api'
import { configureComponents } from './main.config.components'
import { routes } from './router/routes'
import { store } from './store/store'
import { CSSDataVars } from './plugins/CssDataVars'

export const configure = () => {
  Api.init(`${process.env.VUE_APP_BASE_URL}/api`)
  Vue.use(vOutsideEvents)
  Vue.use(VueI18n)
  Vue.use(CSSDataVars)

  Vue.directive('focus', { inserted: el => el.focus() })
  Vue.prototype.$routes = routes
  Vue.prototype.$notification = {
    success: message => store.dispatch('NotificationModule/success', message),
    error: message => store.dispatch('NotificationModule/error', message),
  }

  const i18n = new VueI18n({
    locale: 'en',
    messages: { en },
  })

  configureComponents()
  return { i18n }
}

export const appConfig = {
  title: 'Commons Simulator',
}
