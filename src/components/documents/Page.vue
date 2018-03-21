<template>
  <div>
    <h1>{{ content.title }}</h1>
    <div v-html="content.richText"/>
    <div>
      <img :src="content.image.url" :alt="content.image.alt">
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
      content: {
        title: '',
        richText: '',
        image: {
          url: '',
          alt: ''
        }
      }
    }
  },
  methods: {
    getDocumentContent () {
      this.$prismic.getApi(prismicConfig.apiEndpoint).then((api) => {
        return api.getByUID('page', this.$route.params.uid);
      }).then((document) => {
        this.content.title = this.$prismicDOM.RichText.asText(document.data.title);
        this.content.richText = this.$prismicDOM.RichText.asHtml(document.data.rich_text, linkResolver);
        this.content.image = {
          url: document.data.image.url,
          alt: document.data.image.alt
        };
      }, (err) => {
        console.error('Something went wrong:', err);
      });
    }
  },
  created () {
    this.getDocumentContent();
  }
};
</script>

<style scoped>
</style>
