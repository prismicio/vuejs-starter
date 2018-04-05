<template>
  <div>
    <p>Loading Preview...</p>
  </div>
</template>

<script>
export default {
  name: 'Preview',
  beforeCreate () {
    const previewToken = this.$route.query.token;

    this.$prismicGetApi.then((api) => {
      api.previewSession(previewToken, this.$linkResolver, '/').then((url) => {
        this.$cookie.set(this.$prismic.previewCookie, previewToken, { expires: '30m' });
        this.$router.push(url);
      });
    });
  }
};
</script>

<style scoped>
</style>
