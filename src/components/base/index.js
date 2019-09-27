import Code from './code';
import Doc from './doc';
import Svg from './svg';

const install = function(Vue) {
  Vue.component('xcCode', Code);
  Vue.component('xcDoc', Doc);
  Vue.component('xcSvg', Svg);
};

export default {
  install
};