import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

Vue.config.productionTip = false

const _VUE_INSTANCE_ = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// 开发环境启用模块化编译，不用再考虑编译慢的问题
const loadDynamicModule = require('./import-dynamic-modules').default;
loadDynamicModule(_VUE_INSTANCE_);