import Homepage from '@/components/documents/Homepage';
import Page from '@/components/documents/Page';

export default [
  {
    path: '/',
    component: Homepage
  },
  {
    path: '/page/:uid',
    component: Page
  }
];
