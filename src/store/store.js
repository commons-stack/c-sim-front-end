import Vue from 'vue'
import Vuex from 'vuex'
import { AuthModule } from './modules/AuthModule'
import { ExampleModule } from './modules/ExampleModule'
import { UserModule } from './modules/UserModule'
import { NotificationModule } from './modules/NotificationModule'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    testState: 'root state',
  },
  getters: {
    testGetter: state => state.testState,
  },
  mutations: {
    testMutation(state) {
      state.testState += ' +mutation'
    },
  },
  actions: {
    testAction(ctx) {
      ctx.state.testState += ' +action'
    },
  },
  modules: {
    AuthModule,
    ExampleModule,
    UserModule,
    NotificationModule,
  },
})
