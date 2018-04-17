<template>
  <div :data-wio-id="documentId">
    <h1>
      <prismic-rich-text :field="fields.title" :isPlain="true"/>
    </h1>
    <prismic-rich-text :field="fields.description"/>
    <prismic-link :field="fields.ctaLink">
      <prismic-rich-text :field="fields.ctaText" :isPlain="true"/>
    </prismic-link>
    <div>
      <prismic-image :field="fields.icon"/>
    </div>
  </div>
</template>

<script>
import PrismicImage from '@/components/Prismic/Image';
import PrismicLink from '@/components/Prismic/Link';
import PrismicRichText from '@/components/Prismic/RichText';

export default {
  name: 'Page',
  components: {
    PrismicImage,
    PrismicLink,
    PrismicRichText
  },
  data () {
    return {
      documentId: '',
      fields: this.$prismic.initFields('title', 'description', 'ctaLink', 'ctaText', 'icon')
    }
  },
  methods: {
    getContent (uid) {
      this.$prismic.getApi(window.prismic.endpoint).then((api) => {
        return api.getByUID('page', uid);
      }).then((document) => {
        if (!document) {
          this.$router.push({ name: 'not-found' });
        } else {
          this.documentId = document.id;
          this.fields.title = document.data.title;
          this.fields.description = document.data.description;
          this.fields.ctaLink = document.data.cta_link;
          this.fields.ctaText = document.data.cta_text;
          this.fields.icon = document.data.icon;
        }
      }, (err) => {
        console.error('Something went wrong:', err);
      });
    }
  },
  created () {
    this.getContent(this.$route.params.uid);
  },
  beforeRouteUpdate (to, from, next) {
    this.getContent(to.params.uid);
    next();
  }
};
</script>
