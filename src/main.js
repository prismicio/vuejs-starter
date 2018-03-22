// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Cookie from 'vue-cookie';
import Prismic from '@/prismic/plugin';
import App from '@/App';
import router from '@/router';

Vue.config.productionTip = false;

Vue.use(Cookie);
Vue.use(Prismic);

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
});
