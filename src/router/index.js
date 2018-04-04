import Vue from 'vue';
import Router from 'vue-router';
import NotFound from '@/components/NotFound';
import Preview from '@/components/Preview';
import Tutorial from '@/components/Tutorial';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
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
      path: '/tutorial',
      name: 'tutorial',
      component: Tutorial
    },
    {
      path: '/',
      redirect: { name: 'tutorial' }
    },
    {
      path: '*',
      redirect: { name: 'not-found' }
    }
  ]
});
