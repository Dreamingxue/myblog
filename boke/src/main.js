import Vue from 'vue'
import router from './router/router.js'
//var eventBus=new Vue();
//
Vue.prototype.staticURL='http://nlminepool.cn:9085/app/';
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI);

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import './css/base.css';

Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  //routes,
  render: h => h(App)
})
