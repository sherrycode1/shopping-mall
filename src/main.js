import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import toast from 'components/common/toast'
import VueLazyLoad from 'vue-lazyload'
Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()
// install toast 
Vue.use(toast)

// 使用懒加载插件
Vue.use(VueLazyLoad)

new Vue({
  router,
  render: h => h(App),
  store,
}).$mount('#app')
