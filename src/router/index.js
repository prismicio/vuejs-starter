import Vue from 'vue';
import Router from 'vue-router';
import Tutorial from '@/components/Tutorial';
import NotFound from '@/components/NotFound';
import Preview from '@/components/Preview';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: { name: 'tutorial' }
    },
    {
      path: '/tutorial',
      name: 'tutorial',
      component: Tutorial
    },
    {
      path: '/not-found',
      name: 'not-found',
      component: NotFound
    },
    {
      path: '/preview',
      name: 'preview',
      component: Preview
    },
    {
      path: '*',
      redirect: { name: 'not-found' }
    }
  ]
});
