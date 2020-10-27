// import { Api } from './base/Api'
import axios from 'axios'

export const CommonsService = {
  fetch: data => axios.post('http://game.commonsstack.org/api/cadcad', data),
}
