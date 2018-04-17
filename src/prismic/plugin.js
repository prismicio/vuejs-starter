import prismic from 'prismic-javascript';

export default {
  install: function (Vue, options = {}) {
    Vue.prototype.$prismic = prismic;
    Vue.prototype.$prismic.initFields = function () {
      const fields = {};

      for (const argument of arguments) {
        fields[argument] = null;
      }
      return fields;
    };
  }
};
