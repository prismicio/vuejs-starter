<template>
  <section>
    <p>{{ primary.catchphrase }}</p>
    <div>
      <a :href="primary.ctaUrl">{{ primary.ctaText }}</a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BannerCta',
  props: ['slice'],
  computed: {
    primary () {
      return {
        catchphrase: this.$prismicDOM.RichText.asText(this.slice.primary.catchphrase),
        ctaUrl: this.$prismicDOM.Link.url(this.slice.primary.cta_link),
        ctaText: this.$prismicDOM.RichText.asText(this.slice.primary.cta_text)
      };
    }
  }
};
</script>

<style scoped>
</style>
