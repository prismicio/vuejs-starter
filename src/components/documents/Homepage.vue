<template>
  <div :data-wio-id="content.id">
    <h1>{{ content.title }}</h1>
    <div v-html="content.richText"/>
    <div>
      <img :src="content.image.url" :alt="content.image.alt">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Homepage',
  data () {
    return {
      content: {
        id: '',
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
    getContent () {
      this.$prismic.getApi(window.prismic.endpoint).then((api) => {
        return api.getSingle('homepage');
      }).then((document) => {
        if (!document) {
          this.$router.push({ name: 'not-found' });
          return ;
        }
        this.content.id = document.id;
        this.content.title = this.$prismicDOM.RichText.asText(document.data.title);
        this.content.richText = this.$prismicDOM.RichText.asHtml(document.data.rich_text, this.$linkResolver);
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
    this.getContent();
  }
};
</script>

<style scoped>
</style>
