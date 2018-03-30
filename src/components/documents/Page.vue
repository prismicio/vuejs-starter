<template>
  <div :data-wio-id="content.id">

    <h1>{{ content.title }}</h1>
    <div v-html="content.richText"/>
    <div>
      <img :src="content.image.url" :alt="content.image.alt">
    </div>

    <div>
      <div v-for="(slice, index) in content.slices" :key="'slice_' + index">
        <div v-if="slice.slice_type === 'banner_cta'">
          <BannerCta :slice="slice"/>
        </div>
        <div v-else-if="slice.slice_type === 'gains'">
          <Gains :slice="slice"/>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import BannerCta from '@/components/slices/BannerCta';
import Gains from '@/components/slices/Gains';

export default {
  name: 'Page',
  components: {
    BannerCta,
    Gains
  },
  data () {
    return {
      content: {
        id: '',
        title: '',
        richText: '',
        image: {
          url: '',
          alt: ''
        },
        slices: []
      }
    }
  },
  methods: {
    getContent () {
      this.$prismicGetApi.then((api) => {
        return api.getByUID('page', this.$route.params.uid);
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
        this.content.slices = document.data.body;
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
