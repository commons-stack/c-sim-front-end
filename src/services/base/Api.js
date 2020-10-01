/* eslint-disable no-console */
import axios from 'axios'
import { localstore } from '../../store/localstore'
import { utils } from '../../utils/utils'

const handle = call =>
  new Promise((resolve, reject) =>
    call
      .then(response => {
        resolve(response.data.response.payload)
        utils.log.dev(
          `api success - ${response.config.url}`,
          response.data.response.payload,
        )
      })
      .catch(error => {
        const errorObject = {
          msg: '',
          title: undefined,
          code: undefined,
        }
        if (error.response) {
          if (!error.response.data) reject(errorObject)
          const errData = error.response.data
          errorObject.code = errData.code
          if (errData.error) {
            if (errData.error.display.title === 'messages.validation') {
              const key = Object.keys(errData.error.api_errors)[0]
              errorObject.msg = errData.error.api_errors[key][0]
            } else if (errData.code === 404) errorObject.msg = 'Not Found.'
            else errorObject.msg = 'Error.'
          }
        } else if (error.request) errorObject.msg = 'Network error.'
        else errorObject.msg = 'Invalid api request.'
        reject(errorObject)
        utils.log.dev('api error', error)
      }),
  )

export const Api = {
  _401interceptor: null,

  init(baseURL) {
    if (process.env.NODE_ENV !== 'production')
      axios.interceptors.request.use(config => {
        utils.log.dev(config.url)
        return config
      })
    axios.defaults.baseURL = baseURL
    this.setHeader()
  },

  setHeader() {
    const token = localstore.token.get()
    if (token)
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  },
  removeHeader: () => (axios.defaults.headers.common = {}),

  get: resource => handle(axios.get(resource)),
  post: (resource, data = undefined) => handle(axios.post(resource, data)),
  put: (resource, data) => handle(axios.put(resource, data)),
  delete: resource => handle(axios.delete(resource)),
}
