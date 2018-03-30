<template>
  <section>
    <p>{{ catchphrase }}</p>
    <div>
      <a :href="ctaUrl">{{ ctaText }}</a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BannerCta',
  props: ['slice'],
  computed: {
    catchphrase () {
      return this.$prismicDOM.RichText.asText(this.slice.primary.catchphrase);
    },
    ctaUrl () {
      return this.$prismicDOM.Link.url(this.slice.primary.cta_link);
    },
    ctaText () {
      return this.$prismicDOM.RichText.asText(this.slice.primary.cta_text);
    }
  }
};
</script>

<style scoped>
</style>
