import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bulma/css/bulma.css"
import "./request/http";

Vue.config.productionTip = false
// Vue.prototype.qs = qs

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
