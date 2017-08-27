import Vue from 'vue'
import Lightbox from 'vue-pure-lightbox'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.use(Lightbox)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
