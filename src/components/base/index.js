import Code from './code';
import Doc from './doc';

const install = function(Vue) {
  Vue.component('xcCode', Code);
  Vue.component('xcDoc', Doc);
};

export default {
  install
};