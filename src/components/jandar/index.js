import Tree from './transfer/tree';
import Transfer from './transfer/transfer';

const install = function(Vue) {
  Vue.component('xcTree', Tree);
  Vue.component('oTransfer', Transfer);
};

export default {
  install
};