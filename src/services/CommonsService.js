// import { Api } from './base/Api'
import axios from 'axios'

const simulationApiUrl =
  process.env.VUE_APP_SIMULATION_API_URL ?? 'http://game.commonsstack.org/api/cadcad'

export const CommonsService = {
  fetch: data => axios.post(simulationApiUrl, data),
}
