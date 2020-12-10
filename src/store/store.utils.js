import { utils } from '../utils/utils'
import { is } from '../utils/validation'
import { store } from './store'

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
  const state = module.state || {}
  mapMutationsAndGetters(state, mutations, getters)
  return {
    namespaced: true,
    state,
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

export const wrapStream = (
  endpoint,
  functions = {
    onStart: () => {},
    onSuccess: () => {},
    onFailure: () => {},
    onEnd: () => {},
  },
) =>
  new Promise((resolve, reject) => {
    const sse = new EventSource(endpoint)
    typeof functions.onStart === 'function' && functions.onStart()
    sse.onmessage = m => {
      const parsedData = JSON.parse(m.data)
      typeof functions.onSuccess === 'function' && functions.onSuccess(parsedData)
      resolve(parsedData)
    }
    sse.onerror = e => {
      EventSource.CLOSED == e.eventPhase && sse.close()
      typeof functions.onFailure === 'function' && functions.onFailure(e)
      typeof functions.onEnd === 'function' && functions.onEnd()
      reject(e)
    }
  })

export const wrapPromise = (
  promise,
  functions = {
    notifications: false,
    onStart: () => {},
    onSuccess: () => {},
    onFailure: () => {},
    onEnd: () => {},
  },
) =>
  new Promise((resolve, reject) => {
    typeof functions.onStart === 'function' && functions.onStart()
    promise
      .then(res => {
        if (typeof functions.onSuccess === 'function') functions.onSuccess(res)
        if (functions.notifications === true || functions.notifications === 'success')
          store.dispatch('NotificationModule/success', res.msg)
        resolve(res)
        return res
      })
      .catch(err => {
        if (typeof functions.onFailure === 'function') functions.onFailure(err)
        if (functions.notifications === true || functions.notifications === 'error')
          store.dispatch('NotificationModule/error', err.msg)
        reject(err)
      })
      .finally(() => {
        if (typeof functions.onEnd === 'function') functions.onEnd()
      })
  })

const mapMutationsAndGetters = (object, mutations, getters, parentKeys = []) => {
  Object.entries(object).forEach(([key, value]) => {
    const allKeys = [...parentKeys, key]
    const getCurrentObj = state => parentKeys.reduce((a, c) => a[c], state)
    const currentObj = state => getCurrentObj(state)[key]
    const capitalizedKeys = allKeys.map(utils.capitalize).join('')
    const capitalizedExceptFirst = allKeys.map((x, i) => (i > 0 ? utils.capitalize(x) : x)).join('')
    mutations[`set${capitalizedKeys}`] = (state, data) => (getCurrentObj(state)[key] = data)
    mutations[`clear${capitalizedKeys}`] = state => (getCurrentObj(state)[key] = value)
    getters[`get${capitalizedKeys}`] = state => getCurrentObj(state)[key]
    if (Array.isArray(value)) {
      mapListMutations(mutations, currentObj, capitalizedExceptFirst)
    } else if (is.plainObject(value)) {
      mapMutationsAndGetters(value, mutations, getters, allKeys)
    }
  })
}

const mapListMutations = (mutations, currentObj, capitalizedExceptFirst) => {
  const add = `${capitalizedExceptFirst}ListAdd`
  const addMultiple = `${capitalizedExceptFirst}ListAddMultiple`
  const remove = `${capitalizedExceptFirst}ListRemove`
  const update = `${capitalizedExceptFirst}ListUpdate`
  const push = `${capitalizedExceptFirst}ListPush`
  const pop = `${capitalizedExceptFirst}ListPop`
  const shift = `${capitalizedExceptFirst}ListShift`

  mutations[add] = (state, item) => {
    const arr = currentObj(state)
    const existingIndex = arr.findIndex(x => x.id === item.id)
    existingIndex >= 0 ? arr.splice(existingIndex, 1, item) : arr.push(item)
  }
  mutations[addMultiple] = (state, itemArray) => {
    const arr = currentObj(state)
    itemArray.forEach(item => {
      const existingIndex = arr.findIndex(x => x.id === item.id)
      existingIndex >= 0 ? arr.splice(existingIndex, 1, item) : arr.push(item)
    })
  }
  mutations[remove] = (state, id) => {
    const _id =
      typeof id === 'number'
        ? id
        : typeof id === 'object' && Object.prototype.hasOwnProperty.call(id, 'id')
        ? id.id
        : undefined
    if (_id !== undefined) {
      const index = currentObj(state).findIndex(x => x.id === _id)
      if (index >= 0) currentObj(state).splice(index, 1)
    }
  }
  mutations[update] = (state, item) => {
    const index = currentObj(state).findIndex(x => x.id === item.id)
    if (index >= 0) currentObj(state).splice(index, 1, item)
  }
  mutations[push] = state => currentObj(state).push()
  mutations[pop] = state => currentObj(state).pop()
  mutations[shift] = state => currentObj(state).shift()
}
