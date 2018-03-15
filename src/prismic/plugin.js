import prismic from 'prismic-javascript';
import prismicDOM from 'prismic-dom';

export default {
  install: function (Vue, options) {
    Vue.prototype.$prismic = prismic;
    Vue.prototype.$prismicDOM = prismicDOM;
  }
};
