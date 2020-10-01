import { createModule } from '../store.utils'

export const UserModule = createModule({
  state: {
    user: undefined,
    forms: {
      create: {
        name: '',
        id: null,
      },
    },
  },
  mutations: {},
  actions: {},
})
