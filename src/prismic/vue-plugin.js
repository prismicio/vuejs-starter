import prismic from 'prismic-javascript';

export default {
  install: function (Vue, options = {}) {
    Vue.prototype.$prismic = prismic;
    Vue.prototype.$prismic.endpoint = options.endpoint;
    Vue.prototype.$prismic.initFields = function (fieldApiIds) {
      const fields = {};

      for (const fieldApiId of fieldApiIds) {
        fields[fieldApiId] = null;
      }
      return fields;
    };
  }
};
