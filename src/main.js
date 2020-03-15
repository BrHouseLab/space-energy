import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Argon from '@/plugins/argon-kit'
Vue.use(Argon);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
