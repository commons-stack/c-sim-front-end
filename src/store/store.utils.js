import { is } from '../utils/validation'
import { utils } from '../utils/utils'

// createModule({state, getters, mutations, actions})
// - vuex module factory function which generates MUTATIONS & GETTERS based on STATE (works on nested states)
// mutations: setState(x), clearState()
// collection mutations: stateCollectionAdd(x), stateCollectionAddMultiple(x[]), stateCollectionRemove(x), stateCollectionUpdate(x)
// generates getters: getState

export const createModule = (
  module = {
    state: {},
    getters: {},
    mutations: {},
    actions: {},
  },
) => {
  const mutations = {}
  const getters = {}
  mapMutationsAndGetters(module.state, mutations, getters)
  return {
    namespaced: true,
    state: module.state,
    getters: {
      ...getters,
      ...module.getters,
    },
    mutations: {
      ...mutations,
      ...module.mutations,
    },
    actions: module.actions,
  }
}

// wrapPromise(promise, {onSuccess, onFailure, after})
// - propagate a promise with an interface and hooks
export const wrapPromise = (
  promise,
  functions = {
    onSuccess: () => {},
    onFailure: () => {},
    after: () => {},
  },
) =>
  new Promise((resolve, reject) => {
    promise
      .then(res => {
        if (typeof functions.onSuccess === 'function') functions.onSuccess(res)
        resolve(res)
        return res
      })
      .catch(err => {
        if (typeof functions.onFailer === 'function') functions.onFailure(err)
        reject(err)
      })
      .finally(() => {
        if (typeof functions.after === 'function') functions.after()
      })
  })

const mapMutationsAndGetters = (
  object,
  mutations,
  getters,
  parentKeys = [],
) => {
  Object.entries(object).forEach(([key, value]) => {
    const allKeys = [...parentKeys, key]
    const getCurrentObj = state => parentKeys.reduce((a, c) => a[c], state)
    const currentObj = state => getCurrentObj(state)[key]
    const capitalizedKeys = allKeys.map(utils.capitalize).join('')
    const capitalizedExceptFirst = allKeys
      .map((x, i) => (i > 0 ? utils.capitalize(x) : x))
      .join('')
    mutations[`set${capitalizedKeys}`] = (state, data) =>
      (getCurrentObj(state)[key] = data)
    mutations[`clear${capitalizedKeys}`] = state =>
      (getCurrentObj(state)[key] = JSON.parse(JSON.stringify(value)))
    getters[`get${capitalizedKeys}`] = state => getCurrentObj(state)[key]
    if (Array.isArray(value)) {
      mapCollectionMutations(mutations, currentObj, capitalizedExceptFirst)
    } else if (is.plainObject(value)) {
      mapMutationsAndGetters(value, mutations, getters, allKeys)
    }
  })
}

const mapCollectionMutations = (
  mutations,
  currentObj,
  capitalizedExceptFirst,
) => {
  const add = `${capitalizedExceptFirst}CollectionAdd`
  const addMultiple = `${capitalizedExceptFirst}CollectionAddMultiple`
  const remove = `${capitalizedExceptFirst}CollectionRemove`
  const update = `${capitalizedExceptFirst}CollectionUpdate`

  mutations[add] = (state, item) =>
    currentObj(state).some(x => x.id !== item.id) &&
    currentObj(state).push(item)
  mutations[addMultiple] = (state, itemArray) =>
    itemArray.forEach(i => {
      if (!currentObj(state).some(x => x.id === i.id)) currentObj(state).push(i)
    })
  mutations[remove] = (state, id) => {
    const _id =
      typeof id === 'number'
        ? id
        : typeof id === 'object' &&
          Object.prototype.hasOwnProperty.call(id, 'id')
        ? id.id
        : undefined
    if (_id) {
      const index = currentObj(state).findIndex(x => x.id === _id)
      if (index >= 0) currentObj(state).splice(index, 1)
    }
  }
  mutations[update] = (state, item) => {
    const index = currentObj(state).findIndex(x => x.id === item.id)
    if (index >= 0) currentObj(state).splice(index, 1, item)
  }
}
