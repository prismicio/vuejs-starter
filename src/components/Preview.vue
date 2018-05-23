<template>
  <div>
    <p>Loading the Prismic's Preview...</p>
  </div>
</template>

<script>
import Vue from 'vue';
import Cookie from 'vue-cookie';

Vue.use(Cookie);

export default {
  name: 'Preview',
  beforeCreate () {
    const previewToken = this.$route.query.token;

    this.$prismic.getApi(this.$prismic.endpoint).then((api) => {
      api.previewSession(previewToken, this.$prismic.linkResolver, '/').then((url) => {
        this.$cookie.set(this.$prismic.previewCookie, previewToken, { expires: '30m' });
        window.location.replace(url);
      });
    });
  }
};
</script>
