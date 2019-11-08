import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import ComponentPage from '@/components/page/component';
import Transfer from '@/components/page/transfer';
import Icon from '@/components/page/icon';
import Button from '@/components/page/button';
import Mask from '@/components/page/mask';
import Calendar from '@/components/page/calendar';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/components',
      component: ComponentPage,
      children: [
        {path: '', name: 'components', component: HelloWorld},
        {path: 'transfer', name: 'transfer', component: Transfer},
        {path: 'icon', name: 'icon', component: Icon},
        {path: 'button', name: 'button', component: Button},
        {path: 'calendar', name: 'calendar', component: Calendar},
        {path: 'mask', name: 'mask', component: Mask}
      ]
    }, {
      path: '*',
      redirect: '/'
    }
  ]
});
