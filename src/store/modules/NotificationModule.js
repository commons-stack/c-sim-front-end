import { createModule } from '../store.utils'

export const NotificationModule = createModule({
  state: {
    notifications: [],
    timeout: undefined,
  },
  getters: {
    getId(state) {
      if (state.notifications.length > 0) return state.notifications[0].id
    },
  },
  mutations: {},
  actions: {
    success({ dispatch }, message) {
      dispatch('send', {
        type: 'success',
        message,
      })
    },
    error({ dispatch }, message) {
      dispatch('send', {
        type: 'error',
        message,
      })
    },
    send({ state, dispatch }, { type, message }) {
      const id = Date.now()
      state.notifications.push({
        id,
        type,
        message,
      })
      if (!state.timeout) dispatch('remove', id)
    },
    remove({ state, commit, getters, dispatch }, payload) {
      state.timeout = setTimeout(() => {
        commit('notificationsCollectionRemove', payload)
        state.timeout = undefined
        const id = getters['getId']
        if (id) dispatch('remove', id)
      }, 1200)
    },
  },
})
