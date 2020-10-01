// MOCK

// database
const MockDB = [
  { id: 1, name: 'Zvone' },
  { id: 2, name: 'Bagi' },
  { id: 3, name: 'Simun' },
  { id: 4, name: 'Fran' },
  { id: 5, name: 'Marko' },
  { id: 6, name: 'Hrc' },
  { id: 7, name: 'Braco' },
  { id: 8, name: 'Luka' },
]

const validate = data => {
  const isObj = typeof data === 'object'
  const isNumber = typeof data.id === 'number'
  const isString = typeof data.name === 'string'
  return isObj && isNumber && isString
}

export const ExampleServiceMock = {
  get: id =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const resource = MockDB.find(x => x.id === id)
        resource ? resolve(resource) : reject('Not Found.')
      }, 1000)
    }),
  getAll: () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(MockDB)
      }, 1000)
    })
  },
  create: data =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!validate(data)) {
          reject('Resource is not valid.')
          return
        } else {
          if (MockDB.find(x => x.id === data.id)) {
            reject('Resource already exists')
            return
          } else {
            MockDB.push(data)
            resolve(data)
          }
        }
      }, 1000)
    }),
  update: (id, data) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!validate(data)) {
          reject('Resource is not valid.')
        } else {
          const index = MockDB.findIndex(x => x.id === id)
          if (index >= 0) {
            MockDB.splice(index, 1, data)
            resolve(data)
          } else reject('Not found.')
        }
      }, 1000)
    }),
  delete: id =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = MockDB.findIndex(x => x.id === id)
        if (index >= 0) {
          MockDB.splice(index, 1)
          resolve()
        } else reject('Not found.')
      }, 1000)
    }),
}
