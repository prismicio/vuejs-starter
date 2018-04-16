<template>
  <div>
    <p>Loading the Prismic Preview...</p>
  </div>
</template>

<script>
import linkResolver from '@/prismic/link-resolver';

export default {
  name: 'PrismicPreview',
  beforeCreate () {
    const previewToken = this.$route.query.token;

    this.$prismicGetApi.then((api) => {
      api.previewSession(previewToken, linkResolver, '/').then((url) => {
        this.$cookie.set(this.$prismic.previewCookie, previewToken, { expires: '30m' });
        this.$router.push(url);
      });
    });
  }
};
</script>
