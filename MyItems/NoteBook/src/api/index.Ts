import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'
//
axios.interceptors.request.use((config) => {
  return config
})

axios.interceptors.response.use(
  (res) => {
    if (res.data.status === 20000) {
      return res.data.data
    }
  },
  (err) => {
    return Promise.reject(err)
  }
)

export default axios
