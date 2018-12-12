import axios from 'axios'

export const configureApi = (store) => {
  let baseUrl = '/api'

  axios.defaults.baseURL = baseUrl
}
