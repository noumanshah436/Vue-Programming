// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Tooltip from 'vue-directive-tooltip';


import './style.css';

import { store } from './store/store'

Vue.config.productionTip = false;
Vue.use(Tooltip);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
