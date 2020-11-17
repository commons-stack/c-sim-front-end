import { createModule } from '../store.utils'

export const NotificationModule = createModule({
  state: {
    notifications: [],
    timeout: undefined,
  },
  mutations: {
    clear: state => {
      state.notificaitons = []
      state.timeout = undefined
    },
  },
  actions: {
    success({ dispatch }, message) {
      dispatch('send', { type: 'success', message })
    },
    error({ dispatch }, message) {
      dispatch('send', { type: 'error', message })
    },
    send({ state, dispatch }, { type, message }) {
      state.notifications.push({ id: Date.now(), type, message })
      if (!state.timeout) dispatch('remove')
    },
    remove({ state, commit, dispatch }) {
      if (state.timeout) clearInterval(state.timeout)
      state.timeout = setTimeout(() => {
        commit('notificationsListShift')
        state.timeout = undefined
        if (state.notifications.length !== 0) dispatch('remove')
      }, 2000)
    },
  },
})
