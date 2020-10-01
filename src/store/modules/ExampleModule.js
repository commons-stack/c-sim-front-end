import { wrapPromise, createModule } from '../store.utils'
import { ExampleServiceMock } from '../../services/ExampleServiceMock'

export const ExampleModule = createModule({
  state: {
    resources: [],
    testState: 'module state',
    createResourceId: undefined,
    createResourceName: undefined,
    updateResourceId: undefined,
    updateResourceName: undefined,
  },
  getters: {
    testGetter: state => state.testState,
    createResourceIdValid: state => typeof state.createResourceId === 'number',
    createResourceNameValid: state =>
      typeof state.createResourceName === 'string' &&
      state.createResourceName.length > 0,
    createResourceFormValid: (state, getters) =>
      getters.createResourceIdValid && getters.createResourceNameValid,
  },
  mutations: {
    testMutation: state => (state.testState += ' +mutation'),
  },
  actions: {
    testAction: ctx => (ctx.state.testState += ' +action'),
    getAll: ctx =>
      wrapPromise(ExampleServiceMock.getAll(), {
        onSuccess: x => ctx.commit('resourcesCollectionAddMultiple', x),
      }),
    get: (ctx, payload) =>
      wrapPromise(ExampleServiceMock.get(payload.id), {
        onSuccess: x => ctx.commit('resourcesCollectionAdd', x),
      }),
    create: ctx =>
      wrapPromise(
        ExampleServiceMock.create({
          id: ctx.state.createResourceId,
          name: ctx.state.createResourceName,
        }),
        {
          onSuccess: x => {
            ctx.commit('resourcesCollectionAdd', x)
          },
        },
      ),
    update: ctx =>
      wrapPromise(
        ExampleServiceMock.update(ctx.state.updateResourceId, {
          id: ctx.state.updateResourceId,
          name: ctx.state.updateResourceName,
        }),
        {
          onSuccess: x => ctx.commit('resourcesCollectionUpdate', x),
        },
      ),
    delete: (ctx, payload) =>
      wrapPromise(ExampleServiceMock.delete(payload.id), {
        onSuccess: () => ctx.commit('resourcesCollectionRemove', payload.id),
      }),
  },
})
