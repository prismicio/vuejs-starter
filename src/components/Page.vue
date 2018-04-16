<template>
  <div :data-wio-id="content.id">

    <h1>
      <prismic-rich-text :field="content.title" :asText="true"/>
    </h1>

    <prismic-rich-text :field="content.description" :asText="false"/>

    <prismic-link :field="content.ctaLink">
      <prismic-rich-text :field="content.ctaText" :asText="true"/>
    </prismic-link>

    <div>
      <img :src="content.icon.url" :alt="content.icon.alt">
    </div>

  </div>
</template>

<script>
import PrismicLink from '@/components/PrismicLink';
import PrismicRichText from '@/components/PrismicRichText';

export default {
  name: 'Page',
  components: {
    PrismicLink,
    PrismicRichText
  },
  data () {
    return {
      content: {
        id: '',
        title: [],
        description: [],
        ctaLink: {},
        ctaText: [],
        icon: {}
      }
    }
  },
  methods: {
    getContent (uid) {
      this.$prismicGetApi.then((api) => {
        return api.getByUID('page', uid);
      }).then((document) => {
        if (!document) {
          this.$router.push({ name: 'not-found' });
          return ;
        }

        this.content.id = document.id;
        this.content.title = document.data.title;
        this.content.description = document.data.description;
        this.content.ctaLink = document.data.cta_link;
        this.content.ctaText = document.data.cta_text;
        this.content.icon = document.data.icon;
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
