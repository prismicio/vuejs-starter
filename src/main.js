// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import PrismicVue from 'prismic-vue-test'
import linkResolver from '@/prismic/link-resolver'
import htmlSerializer from '@/prismic/html-serializer'
import App from '@/App'
import router from '@/router'

Vue.config.productionTip = false

Vue.use(PrismicVue, {
  endpoint: window.prismic.endpoint,
  linkResolver,
  htmlSerializer
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
