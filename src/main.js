import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import './assets/css/base.scss'
Vue.config.productionTip = false
// 混入全局变量
import globalMixin from './plugins/global'
Vue.mixin(globalMixin)
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
