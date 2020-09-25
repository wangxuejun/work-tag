import axios from 'axios'
let http = axios.create({
  baseURL: '',
  dataType: 'text',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  },
  transformRequest: [function (data) {
    return data
  }]
})
http.defaults.timeout = 15000
http.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})
http.interceptors.response.use(function (response) {
  return response
}, function () {
})

export default http
