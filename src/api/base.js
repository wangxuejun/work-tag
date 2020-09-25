import http from '../utils/axios'
function config (url, params, method = 'GET') {
  return {
    url: url,
    params: method === 'GET' || method === 'DELETE' ? params : null,
    data: method === 'POST' || method === 'PUT' ? JSON.stringify(params) : null,
    method: method
  }
}
// 获取icon css
export function apiGetIconCss () {
  return http(config('/icon/npm/@mdi/font@latest/css/materialdesignicons.min.css', {}, 'GET'))
}
// 打开一个cmd
export function apiOpenCmd () {
  return http(config('/api/openCmd', {}, 'GET'))
}
// 获取icon css
export function apiGetText () {
  return http(config('/api/redText', {}, 'GET'))
}
// 获取目录
export function apiGetCatalog() {
  return http(config('/api/redCatalog', {}, 'GET'))
}
// 启动项目
export function apiRunItem(params) {
  return http(config('/api/runItem', params, 'GET'))
}
