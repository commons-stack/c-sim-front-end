import Vue from 'vue'
import VueI18n from 'vue-i18n'
import vOutsideEvents from 'vue-outside-events'
import VueSocialSharing from 'vue-social-sharing'
import { TippyComponent } from 'vue-tippy'
import en from './locales/en.json'
import { configureComponents } from './main.config.components'
import { BreakpointPlugin } from './plugins/BreakpointsPlugin'
import { CSSVars } from './plugins/CSSVars'
import { FormsPlugin } from './plugins/FormsPlugin'
import { XState } from './plugins/XState'
import VTooltip from 'v-tooltip'
import { routes } from './router/routes'
import { Api } from './services/base/Api'
import { store } from './store/store'

export const configure = () => {
  Api.init(`${process.env.VUE_APP_BASE_URL}/api`)
  Vue.use(vOutsideEvents)
  Vue.use(VueI18n)
  Vue.use(CSSVars)
  Vue.use(XState)
  Vue.use(FormsPlugin)
  Vue.use(BreakpointPlugin)
  Vue.use(VueSocialSharing)

  Vue.use(VTooltip)
  VTooltip.options.defaultDelay = {
    show: 300,
    hide: 300,
  }

  Vue.component('tippy', TippyComponent)

  Vue.directive('focus', { inserted: el => el.focus() })
  Vue.prototype.$sleep = ms => new Promise(res => setTimeout(res, ms))
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
