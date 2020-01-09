import Vue from 'vue';
import Router from 'vue-router';
import ComponentPage from '@/components/page/component';
import Component from '@/components/page/index';
import Transfer from '@/components/page/transfer';
import Icon from '@/components/page/icon';
import Button from '@/components/page/button';
import Mask from '@/components/page/mask';
import Calendar from '@/components/page/calendar';
import Message from '@/components/page/message';
import Timeline from '@/components/page/timeline';
import Start from '@/components/page/start';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/start',
      component: ComponentPage,
      children: [
        {path: '', name: 'start', component: Start}
      ]
    },
    {
      path: '/components',
      component: ComponentPage,
      children: [
        {path: '', name: 'components', component: Component},
        {path: 'transfer', name: 'transfer', component: Transfer},
        {path: 'icon', name: 'icon', component: Icon},
        {path: 'button', name: 'button', component: Button},
        {path: 'calendar', name: 'calendar', component: Calendar},
        {path: 'mask', name: 'mask', component: Mask},
        {path: 'message', name: 'message', component: Message},
        {path: 'timeline', name: 'timeline', component: Timeline}
      ]
    }, {
      path: '*',
      redirect: '/start'
    }
  ]
});
