import Vue from 'vue';
import Router from 'vue-router';
import NotFound from '@/components/NotFound';
import Preview from '@/components/Preview';
import Homepage from '@/components/documents/Homepage';
import Page from '@/components/documents/Page';
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
      path: '/',
      name: 'homepage',
      component: Homepage
    },
    {
      path: '/page/:uid',
      name: 'page',
      component: Page
    },
    {
      path: '/tutorial',
      name: 'tutorial',
      component: Tutorial
    },
    {
      path: '*',
      redirect: { name: 'not-found' }
    }
  ]
});
