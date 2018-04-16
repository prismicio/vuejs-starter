import prismic from 'prismic-javascript';

export default {
  install: function (Vue, options = {}) {
    Vue.prototype.$prismic = prismic;
    Vue.prototype.$prismicGetApi = prismic.getApi(window.prismic.endpoint);
  }
};
