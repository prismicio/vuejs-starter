// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '@/App';
import Prismic from '@/prismic/plugin';
import routes from '@/routes';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Prismic);

/* eslint-disable no-new */
const router = new VueRouter({
  mode: 'history',
  routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
});
