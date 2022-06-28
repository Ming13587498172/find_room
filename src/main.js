import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.less'
import 'amfe-flexible'
import LcHead from '@/components/LcHead.vue'

Vue.config.productionTip = false

Vue.use(Vant)

Vue.component('LcHead', LcHead)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
