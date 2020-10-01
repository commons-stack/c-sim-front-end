import App from './App.vue'
import Vue from 'vue'
import { configure } from './main.config'
import { router } from './router/router'
import { store } from './store/store'

Vue.config.productionTip = false

const { i18n } = configure()

new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
