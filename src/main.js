import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import './assets/Estilos.css'
import jquery from 'jquery'
import * as VueGoogleMaps from "vue2-google-maps"

Vue.config.productionTip = false
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyB1ewh1wTzxAoGy-1L_edJxmP6ESjk3j8o",
  },
});

new Vue({
  router,
  store,
  vuetify,
  jquery,
  render: h => h(App)
}).$mount('#app')
