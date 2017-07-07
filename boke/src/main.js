import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
//var eventBus=new Vue();
//
Vue.prototype.staticURL='http://shenyuxf.top:0303/'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)

new Vue({
  el: '#app',
  router,
  //routes,
  render: h => h(App)
})
