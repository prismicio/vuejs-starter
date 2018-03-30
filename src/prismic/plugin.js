import prismic from 'prismic-javascript';
import prismicDOM from 'prismic-dom';
import linkResolver from '@/prismic/link-resolver';

export default {
  install: function (Vue, options = {}) {
    Vue.prototype.$prismic = prismic;
    Vue.prototype.$prismicDOM = prismicDOM;
    Vue.prototype.$prismicGetApi = prismic.getApi(window.prismic.endpoint);
    Vue.prototype.$linkResolver = linkResolver;
  }
};
