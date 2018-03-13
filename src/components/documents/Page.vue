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
import Prismic from 'prismic-javascript';
import PrismicDOM from 'prismic-dom';
import PrismicConfig from '@/prismic-config';

export default {
  name: 'Page',
  data () {
    return {
      title: '',
      richText: '',
      image: {
        url: '',
        alt: ''
      }
    }
  },
  methods: {
    fillContent () {
      Prismic.getApi(PrismicConfig.apiEndpoint).then(function (api) {
        return api.getByUID('page', 'about');
      }).then((document) => {
        this.title = PrismicDOM.RichText.asText(document.data.title);
        this.richText = PrismicDOM.RichText.asHtml(document.data.rich_text);
        this.image = {
          url: document.data.image.url,
          alt: document.data.image.alt
        };
      }, function (err) {
        console.error('Something went wrong:', err);
      })
    }
  },
  beforeMount () {
    this.fillContent()
  }
};
</script>

<style scoped>

</style>
