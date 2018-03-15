import Homepage from '@/components/documents/Homepage';
import Page from '@/components/documents/Page';
import NotFound from '@/components/NotFound';

export default [
  {
    path: '/',
    component: Homepage
  },
  {
    path: '/page/:uid',
    component: Page
  },
  {
    path: '*',
    component: NotFound
  }
];
