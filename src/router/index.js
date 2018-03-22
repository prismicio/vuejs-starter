import Vue from 'vue';
import Router from 'vue-router';
import Preview from '@/components/Preview';
import Homepage from '@/components/documents/Homepage';
import Page from '@/components/documents/Page';
import NotFound from '@/components/NotFound';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
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
      path: '*',
      name: 'not-found',
      component: NotFound
    }
  ]
});
