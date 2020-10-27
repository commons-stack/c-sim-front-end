import Vue from 'vue'
import Vuex from 'vuex'
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
})
