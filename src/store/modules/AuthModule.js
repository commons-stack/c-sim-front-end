import { localstore } from '../localstore'
import { AuthService } from '../../services/AuthService'
import { wrapPromise, createModule } from '../store.utils'
import { Api } from '../../services/base/Api'

export const AuthModule = createModule({
  namespaced: true,
  state: {
    token: undefined,
    error: undefined,
  },
  getters: {},
  mutations: {
    setToken(state, token) {
      localstore.token.set(token)
      Api.setHeader()
      state.token = token
    },
  },
  actions: {
    login: (ctx, payload) =>
      wrapPromise(AuthService.login(payload.data), {
        onSuccess: x => {
          ctx.commit('setToken', x.token)
          ctx.commit('UserModule/setUser', x.user, { root: true })
        },
        onFailure: x => ctx.commit('setError', x.response.data),
      }),
  },
})
