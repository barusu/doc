import Code from './code';
import Doc from './doc';
import Svg from './svg';
import Button from './button';

const install = function(Vue) {
  Vue.component('xcCode', Code);
  Vue.component('xcDoc', Doc);
  Vue.component('xcSvg', Svg);
  Vue.component('xcButton', Button);
};

export default {
  install
};