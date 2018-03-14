<template>
  <div>
    <h1>{{ title }}</h1>
    <div v-html="richText"/>
    <div>
      <img :src="image.url" :alt="image.alt">
    </div>
  </div>
</template>

<script>
import prismicConfig from '@/prismic/config';
import linkResolver from '@/prismic/link-resolver';

export default {
  name: 'Page',
  data () {
    return {
      title: null,
      richText: null,
      image: {
        url: null,
        alt: null
      }
    }
  },
  methods: {
    getDocumentContent () {
      this.$prismic.getApi(prismicConfig.apiEndpoint).then(function (api) {
        return api.getByUID('page', 'about');
      }).then((document) => {
        this.title = this.$prismicDOM.RichText.asText(document.data.title);
        this.richText = this.$prismicDOM.RichText.asHtml(document.data.rich_text, linkResolver);
        this.image = {
          url: document.data.image.url,
          alt: document.data.image.alt
        };
      }, function (err) {
        console.error('Something went wrong:', err);
      });
    }
  },
  beforeMount () {
    this.getDocumentContent();
  }
};
</script>

<style scoped>
</style>
