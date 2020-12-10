// import { Api } from './base/Api'
import axios from 'axios'

const simulationApiUrl = process.env.VUE_APP_SIMULATION_API_URL
if (!simulationApiUrl) throw new Error('VUE_APP_SIMULATION_API_URL is missing from env.')

export const CommonsService = {
  fetch: data => axios.post(simulationApiUrl, data),
}
