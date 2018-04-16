<template>
  <div :data-wio-id="content.id">
    <h1>{{ content.title }}</h1>
    <component :is="content.descriptionComponent"/>
    <prismic-link :link="content.ctaLink">
      {{ content.ctaText }}
    </prismic-link>
    <div>
      <img :src="content.icon.url" :alt="content.icon.alt">
    </div>
  </div>
</template>

<script>
import PrismicLink from '@/components/PrismicLink';

export default {
  name: 'Page',
  components: {
    PrismicLink
  },
  data () {
    return {
      content: {
        id: '',
        title: '',
        descriptionComponent: {
          template: '<div/>'
        },
        ctaLink: {},
        ctaText: '',
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
        this.content.title = this.$prismicDOM.RichText.asText(document.data.title);
        this.content.descriptionComponent = {
          template: '<div>' + this.$prismicDOM.RichText.asHtml(document.data.description, this.$linkResolver, this.$htmlSerializer) + '</div>'
        };
        this.content.ctaLink = document.data.cta_link;
        this.content.ctaText = this.$prismicDOM.RichText.asText(document.data.cta_text);
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
