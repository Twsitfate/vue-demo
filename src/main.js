import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import baseUrl from '@/api/baseUrl'
import {getRequest} from '@/utils/http'
import {postRequest} from '@/utils/http'
import {deleteRequest} from '@/utils/http'

// vue挂载
Vue.prototype.$BASE_URL = baseUrl
Vue.prototype.getRequest = getRequest;
Vue.prototype.postRequest = postRequest;
Vue.prototype.deleteRequest = deleteRequest;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
