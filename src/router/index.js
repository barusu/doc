import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import ComponentPage from '@/components/page/component';

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
        {path: 'icon', name: 'icon', component: HelloWorld}
      ]
    }
  ]
});
