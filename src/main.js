import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import vueMq from 'vue-mq'

Vue.config.productionTip = false

Vue.use(vueMq, {
  breakpoints: {
    mobile: 640,
    desktop: Infinity,
  }
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')