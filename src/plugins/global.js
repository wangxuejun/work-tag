// 声明全局变量
let global = {
  dark: false
}
let globalMixin = {
  data () {
    return {
      Global: global
    }
  }
}
export default globalMixin
