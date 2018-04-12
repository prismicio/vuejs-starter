import prismic from 'prismic-javascript';
import prismicDOM from 'prismic-dom';
import linkResolver from '@/prismic/link-resolver';
import htmlSerializer from '@/prismic/html-serializer';

export default {
  install: function (Vue, options = {}) {
    Vue.prototype.$prismic = prismic;
    Vue.prototype.$prismicDOM = prismicDOM;
    Vue.prototype.$prismicGetApi = prismic.getApi(window.prismic.endpoint);
    Vue.prototype.$linkResolver = linkResolver;
    Vue.prototype.$htmlSerializer = htmlSerializer;
  }
};
