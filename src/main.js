import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.less'
import '@/css/icon-font/iconfont.css'
import 'amfe-flexible'
import LcHead from '@/components/LcHead.vue'
import MainHead from '@/components/MainHead.vue'
import CardMain from '@/components/CardMain.vue'

Vue.config.productionTip = false

Vue.use(Vant)

Vue.component('LcHead', LcHead)
Vue.component('MainHead', MainHead)
Vue.component('CardMain', CardMain)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
