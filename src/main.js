// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

import Shiro from 'shiroui';
import 'shiroui/dist/index.css';
Vue.use(Shiro);

import './scss/style.scss';
import 'highlight.js/styles/atom-one-light.css';
// import 'highlight.js/styles/solarized-light.css';

import xc from '@/components/base/index.js';
Vue.use(xc);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    version: Shiro.version
  },
  router,
  components: {App},
  template: '<App/>'
})
