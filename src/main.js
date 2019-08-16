import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import 'vant/lib/index.css'

Vue.use(Vant);
Vue.use(MintUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
