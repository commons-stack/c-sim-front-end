import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { CommonsModule } from './modules/CommonsModule'
import { NotificationModule } from './modules/NotificationModule'
import { UserModule } from './modules/UserModule'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    UserModule,
    CommonsModule,
    NotificationModule,
  },
  actions: {
    onOpen({ commit }) {
      commit('NotificationModule/clear')
    },
    onClose() {},
    onLogin() {},
    onLogout() {},
  },
  plugins: [createPersistedState()],
})

store.dispatch('onOpen')
window.addEventListener('beforeunload', () => store.dispatch('onClose'))
